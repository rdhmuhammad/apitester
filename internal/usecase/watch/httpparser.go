package watch

import (
	"encoding/json"
	"fmt"
	"math/rand/v2"
	"regexp"
	"slices"
	"strings"
)

var reqMethodRegex = regexp.MustCompile(`^(GET|POST|PUT|PATCH|DELETE|HEAD|OPTIONS)\s+(.+)$`)
var headerRegex = regexp.MustCompile(`^([a-zA-Z0-9_\-]+)\s*:\s*(.+)$`)
var captureRegex = regexp.MustCompile(`^capture\s+([a-zA-Z0-9_$]+)\s*=\s*(.+)$`)

type httpParser struct{}

func newHttpParser() *httpParser {
	return &httpParser{}
}

func (p *httpParser) parse(content string) []TestStep {
	content = strings.TrimPrefix(content, "\uFEFF")
	if strings.TrimSpace(content) == "" {
		return []TestStep{}
	}

	blockPattern := regexp.MustCompile(`(?m)^###\s+`)
	blocks := blockPattern.Split(content, -1)

	var result []TestStep
	for i, block := range blocks {
		block = strings.TrimSpace(block)
		if block == "" || !p.IsRequest(block) {
			continue
		}

		step := p.parseBlock(block, i+1)
		result = append(result, step)
	}

	if len(result) == 1 && contains(result[0].Name, "###") {
		return []TestStep{}
	}

	return result
}

func (p *httpParser) IsRequest(block string) bool {
	for _, mp := range []string{"POST", "GET", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"} {
		if strings.Contains(block, mp) {
			return true
		}
	}

	return false
}

func (p *httpParser) parseBlock(block string, index int) TestStep {
	lines := strings.Split(block, "\n")

	stepName := strings.TrimSpace(lines[0])
	if stepName == "" {
		stepName = fmt.Sprintf("Step %d", index)
	}

	method := "GET"
	url := ""
	var headers []TestHeader
	var bodyLines []string
	var assertions []AssertionRule
	var captures []CaptureRule

	mode := "request_line"
	isValidBody := false

	for i := 1; i < len(lines); i++ {
		line := lines[i]

		if strings.HasPrefix(strings.TrimSpace(line), ">> {%") {
			mode = "magic_block"
			continue
		}

		if mode == "magic_block" && strings.HasSuffix(strings.TrimSpace(line), "%}") {
			mode = "body"
			continue
		}

		if mode == "magic_block" {
			trimmed := strings.TrimSpace(line)
			if trimmed == "" {
				continue
			}

			if strings.HasPrefix(trimmed, "assert ") {
				expr := strings.TrimSpace(strings.TrimPrefix(trimmed, "assert "))
				if expr != "" {
					assertions = append(assertions, AssertionRule{
						ID:         generateID("assert"),
						Expression: expr,
					})
				}
			} else if strings.HasPrefix(trimmed, "capture ") {
				matches := captureRegex.FindStringSubmatch(trimmed)
				if matches != nil {
					captures = append(captures, CaptureRule{
						ID:         generateID("cap"),
						VarName:    strings.TrimSpace(matches[1]),
						Expression: strings.TrimSpace(matches[2]),
					})
				}
			}
			continue
		}

		if mode == "request_line" {
			trimmedLine := strings.TrimSpace(line)
			if trimmedLine == "" || strings.HasPrefix(trimmedLine, "#") || strings.HasPrefix(trimmedLine, "//") {
				continue
			}

			matches := reqMethodRegex.FindStringSubmatch(trimmedLine)
			if matches != nil {
				method = strings.ToUpper(matches[1])
				url = strings.TrimSpace(matches[2])
				mode = "headers"
			}
			continue
		}
		if mode == "headers" {
			trimmedLine := strings.TrimSpace(line)
			if trimmedLine == "" {
				mode = "body"
				continue
			}
			if strings.HasPrefix(trimmedLine, "#") || strings.HasPrefix(trimmedLine, "//") {
				continue
			}

			headerMatches := headerRegex.FindStringSubmatch(line)
			if headerMatches != nil {
				headers = append(headers, TestHeader{
					Key:   strings.TrimSpace(headerMatches[1]),
					Value: strings.TrimSpace(headerMatches[2]),
				})
			} else if !isValidBody {
				mode = "body"
				bodyLines = append(bodyLines, line)
			}
			continue
		}

		if mode == "body" && !isValidBody {
			bodyLines = append(bodyLines, line)
		}

		if slices.ContainsFunc(headers, func(s TestHeader) bool {
			return s.Key == "Content-Type" && s.Value == "application/json"
		}) && json.Valid([]byte(strings.Join(bodyLines, " "))) {
			isValidBody = true
		}
	}

	bodyText := strings.TrimSpace(strings.Join(bodyLines, "\n"))

	return TestStep{
		ID:         generateID("step"),
		Name:       stepName,
		Method:     method,
		URL:        fallback(url, "{{baseUrl}}/"),
		Headers:    headers,
		Body:       bodyText,
		Assertions: assertions,
		Captures:   captures,
	}
}

func (p *httpParser) serialize(steps []TestStep) string {
	var buf strings.Builder
	for _, step := range steps {
		buf.WriteString("### ")
		buf.WriteString(step.Name)
		buf.WriteString("\n")
		buf.WriteString(step.Method)
		buf.WriteString(" ")
		buf.WriteString(step.URL)
		buf.WriteString("\n")

		for _, h := range step.Headers {
			if h.Key != "" && h.Value != "" {
				buf.WriteString(h.Key)
				buf.WriteString(": ")
				buf.WriteString(h.Value)
				buf.WriteString("\n")
			}
		}

		if step.Body != "" {
			buf.WriteString("\n")
			buf.WriteString(step.Body)
			buf.WriteString("\n")
		}

		if len(step.Assertions) > 0 || len(step.Captures) > 0 {
			buf.WriteString("\n>> {%\n")
			for _, a := range step.Assertions {
				if strings.TrimSpace(a.Expression) != "" {
					buf.WriteString("  assert ")
					buf.WriteString(a.Expression)
					buf.WriteString("\n")
				}
			}
			for _, c := range step.Captures {
				if strings.TrimSpace(c.VarName) != "" && strings.TrimSpace(c.Expression) != "" {
					buf.WriteString("  capture ")
					buf.WriteString(c.VarName)
					buf.WriteString(" = ")
					buf.WriteString(c.Expression)
					buf.WriteString("\n")
				}
			}
			buf.WriteString("%}\n")
		}
	}
	return buf.String()
}

func generateID(prefix string) string {
	const charset = "abcdefghijklmnopqrstuvwxyz0123456789"
	b := make([]byte, 6)
	for i := range b {
		b[i] = charset[rand.IntN(len(charset))]
	}
	return fmt.Sprintf("%s-%s", prefix, string(b))
}

func fallback(s, d string) string {
	if s == "" {
		return d
	}
	return s
}

func contains(s, substr string) bool {
	return strings.Contains(s, substr)
}
