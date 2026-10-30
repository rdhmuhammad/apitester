# LLM Wiki

A personal knowledge base maintained by AI agents.  
Based on Andrej Karpathy's LLM Wiki pattern.

## Purpose

This wiki is a structured, interlinked knowledge base for working with this codebase.
- Agent AI maintains the wiki
- Human curates sources (folder raw), asks questions, and guides the analysis

## Folder Structure

| Folder                                      | Note                                               |
| ------------------------------------------- | -------------------------------------------------- |
| resource/document/raw                             | source documents (immutable -- never modify these) |
| resource/document/wiki                            | markdown pages maintained by agentic ai            |
| resource/document/wiki/patterns                   | implementation and architectural patterns         |
| resource/document/wiki/patterns/<module>          | related pattern pages grouped by module           |
| resource/document/wiki/decisions                  | recorded technical decisions                      |
| resource/document/wiki/concepts                   | reusable domain and codebase concepts             |
| resource/document/wiki/index.md                   | grouped table of contents for the entire wiki     |
| resource/document/wiki/log.md                     | append-only record of all operations              |
| resource/document/wiki/tasks                      | task management folder                             |
| resource/document/wiki/tasks/backlog.md           | living checklist of pending / in-progress / done tasks |

## Ingest: Raw -> Wiki

When a source is added to `resource/document/raw` and you are asked to ingest it:
1. Read the full source document
2. Discuss key takeaways with the user before writing anything
3. Create a summary page in the appropriate category folder, using the source's topic and module. For implementation examples, use `resource/document/wiki/patterns/<module>/`.
4. Create or update concept pages in `resource/document/wiki/concepts/` for major reusable ideas or entities.
5. Create decision pages in `resource/document/wiki/decisions/` for explicit technical choices and rationale.
6. Add path-qualified wiki-links (for example, `[[patterns/controller/example-of-module-controller]]`) to connect related pages.
7. Update `resource/document/wiki/index.md` with grouped sections and one-line descriptions for every page.
8. Append an entry to `resource/document/wiki/log.md` with the date, source name, and what changed.
A single source may touch 10-15 wiki pages. That is normal.

## Page format

Every wiki page should follow this structure:

```markdown
# Page Title

**Summary**: One to two sentences describing this page.
**Sources**: List of raw source files this page draws from.
**Last updated**: Date of most recent update.

---

Main content goes here. Use clear headings and short paragraphs.
Link to related concepts using [[wiki-links]] throughout the text.

## Related pages

- [[related-concept-1]]
- [[related-concept-2]]
```

## Question Answering

When user asks a question:
1. Read `resource/document/wiki/index.md` first to find relevant pages
2. Read those pages and synthesize an answer
3. If answer is not in wiki, note to chat about that while resolving the question
4. If answer is valuable, offer to save it as a new wiki page

Good answers should be filed back into the wiki so they compound over time.

## Lint

When the user asks you to lint or audit the wiki:
- Check for contradictions between pages
- Find orphan pages (no inbound links from other pages)
- Identify concepts mentioned in pages that lack their own page
- Flag claims that may be outdated based on newer sources
- Check that all pages follow the page format above
- Check that every wiki page is in the correct category/module folder and that index links match its path
- Report findings as a numbered list with suggested fixes

## Task Management

Tasks are **authored by the user** as markdown files inside `resource/document/raw/tasks/`.  
`resource/document/wiki/tasks/backlog.md` is the living progress tracker maintained by the agent.

### Task source template

Every raw task file in `resource/document/raw/tasks/` follows this structure:

```markdown
---
- code: short unique identifier (e.g. TASK-001)
- dependency: code(s) of tasks that must be completed first
- title: human-readable task name
- files: list of files likely involved
---

## Acceptance Criteria
- What must be true for this task to be considered done.

## Flow
- Step-by-step description of what needs to happen.

## Problem Statement *(optional)*
- Context or motivation for the task.
```

### Agent behavior

**Executing a task** — when the user says "execute task `<code>`" or "run task `<title>`":
1. Find and read the corresponding file in `resource/document/raw/tasks/`.
2. Move the task to **In Progress** in `backlog.md`.
3. Follow the **Flow** and satisfy the **Acceptance Criteria**, respecting any **Dependency** order.
4. When done, move the task to **Done** in `backlog.md`.
5. Append an entry to `resource/document/wiki/log.md`.

**Updating status manually** — when the user says "add task X to todo / in-progress / done":
1. Add or move the referenced task (by code or title) to the correct section in `backlog.md`.
2. Keep entries concise — one line per task.

**Backlog format**:
```markdown
- [ ] TASK-001 · Title here   ← Todo
- [~] TASK-002 · Title here   ← In Progress
- [x] TASK-003 · Title here   ← Done
```

Preserve existing structure: **In Progress** → **Todo** → **Done**.  
Always append an entry to `resource/document/wiki/log.md` after any backlog change.

## Rules
- Never modify anything in the `resource/document/raw` folder (including `resource/document/raw/tasks/` — task files are user-authored)
- Always update `resource/document/wiki/index.md` and `resource/document/wiki/log.md` after changes
- Keep page names lowercase with hyphens (e.g. `machine-learning.md`)
- Keep category and module folder names lowercase with hyphens
- Keep `index.md` and `log.md` at the wiki root; category indexes may exist inside category folders
- Write in clear, plain language
- When uncertain about how to categorize something, ask the user
