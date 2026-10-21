<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![project_license][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a>
    <img src="https://raw.githubusercontent.com/rdhmuhammad/apitester/refs/heads/main/frontend/src/assets/images/logo.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">API Tester</h3>

  <p align="center">
    An integrated ecosystem for integration testing and API documentation — read Postman specifications directly from code and run an interactive GUI (Swagger UI-style) embedded in your Go service.
    <br />
    <br />
    <a href="https://apitester-frontend.vercel.app/#/editor" target="_blank" rel="noopener noreferrer">View Demo</a>
    &middot;
    <a href="https://github.com/rdhmuhammad/apitester-desktop" target="_blank" rel="noopener noreferrer">Desktop Version</a>
    &middot;
    <a href="https://github.com/rdhmuhammad/apitester-generator-spring" target="_blank" rel="noopener noreferrer">Spring Boot Generator</a>
    &middot;
    <a href="https://github.com/rdhmuhammad/apitester/issues/new?labels=bug&template=bug-report---.md" target="_blank" rel="noopener noreferrer">Report Bug</a>
    &middot;
    <a href="https://github.com/rdhmuhammad/apitester/issues/new?labels=enhancement&template=feature-request---.md" target="_blank" rel="noopener noreferrer">Request Feature</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## 📖 About The Project

> [!TIP]
> * **Desktop Version**: If you want to use the full version as a standalone desktop application, download it at [apitester-desktop](https://github.com/rdhmuhammad/apitester-desktop).
> * **Java Spring Boot**: If you want to generate specifications and apply API Tester to Java Spring Boot, use [apitester-generator-spring](https://github.com/rdhmuhammad/apitester-generator-spring).

<div align="center">
    <img src="https://raw.githubusercontent.com/rdhmuhammad/apitester/refs/heads/main/resource/example_gui/request.png" width="45%" alt="Example request">
    <img src="https://raw.githubusercontent.com/rdhmuhammad/apitester/refs/heads/main/resource/example_gui/response.png" width="45%" alt="Example response">
</div>
<br />

Have you ever gotten tired of manually creating Postman requests every time you finish an endpoint?
It gets even worse when you're working with endpoints that have massive request payloads like transaction APIs in e-commerce systems, which often contain multiple nested objects, arrays, and dozens of fields that all need valid values. On top of that, you usually need to prepare several variations of the request to cover different test scenarios. It can be repetitive, time-consuming, and frustrating.

Driven by these frustrations, my initial workaround was to delegate the task to agentic AI. While it worked, using AI for something highly repetitive and deterministic felt like a waste of resources when it could be automated directly.

**API Tester** solves this by providing an **embeddable API documentation and testing UI** for Go web applications (similar to Swagger UI / Redoc, but with full Postman collection compatibility and interactive testing features).

### Key Features

* **📦 Zero-Dependency Go Library**: Embeds the full-featured React SPA directly into your Go binary using Go `embed.FS`. No separate frontend hosting or Docker container required.
* **📑 Native Postman v2.1 Support**: Uses standard Postman collection JSON files (`collection.json`) directly without proprietary lock-in.
* **⚡ Bi-directional Live Sync**: Hot-reloads changes from disk using file watching (`fsnotify`), and allows pushing changes made in the GUI back to disk.
* **🧪 Interactive Testing & Runner**: Execute `GET`, `POST`, `PUT`, `PATCH`, and `DELETE` requests with query parameters, headers, path variables, JSON/raw bodies, and multipart form uploads.
* **📜 Scripting & Dynamic Variables**: Sandpack-powered pre-request and test script runner in the browser, with dynamic variable interpolation (`{{baseUrl}}`, `{{token}}`).
* **📑 Multi-Tab Workspace**: Open and manage multiple requests side-by-side with unsaved changes tracking.
* **🔒 Built-in Authentication (Optional)**: Protect your documentation endpoints with admin credentials and JWT cookie authentication.
* **🌗 Dark Mode**: Modern, accessible UI with built-in light and dark themes.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* ![Go](https://img.shields.io/badge/Language-Go%201.25+-00ADD8?style=for-the-badge&logo=go&logoColor=white)
* ![net/http](https://img.shields.io/badge/Router-net%2Fhttp-00ADD8?style=for-the-badge&logo=go&logoColor=white)
* ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
* ![React](https://img.shields.io/badge/react%2019-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![Vite](https://img.shields.io/badge/vite%207-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
* ![Tailwind CSS](https://img.shields.io/badge/tailwindcss%20v4-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
* ![Redux Toolkit](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📚 Table of Contents

<details>
<summary>Click to expand</summary>

- 🚀 [Getting Started](#-getting-started)
    - 📦 [Prerequisites](#-prerequisites)
    - ▶️ [Quick Start: Run the Example](#-quick-start-run-the-example)
    - 🔌 [Embedding in Your Go Service](#-embedding-in-your-go-service)
    - 🎨 [Frontend Development (Optional)](#-frontend-development-optional)
- ⚙️ [Configuration Options](#️-configuration-options)
- 🧩 [Roadmap](#-roadmap)
- 👨‍💻 [Contributing](#-contributing)
    - 🤷️ [Top contributors](#-top-contributors)
- 🗃 [License](#-license)
- ☎️ [Contact](#-contact)

</details>

<!-- GETTING STARTED -->
## 🚀 Getting Started

API Tester can be used in two ways:
1. **As a Go package embedded into your application** (just like Swagger UI or Scalar).
2. **As a standalone example server** to test your collections immediately.

### 📦 Prerequisites

* **Golang**: Version `1.24.0` or higher (Go `1.25.0` recommended)
* **Node.js & PNPM** *(Only required if developing or rebuilding the frontend GUI)*:
  * Node.js: Version `22.0` or higher
  * PNPM: Version `10.23.0` or higher

> [!NOTE]
> No external database (such as MySQL) or Docker container is required for runtime. API Tester reads and synchronizes directly with your local `collection.json` file.

---

### ▶️ Quick Start: Run the Example

The fastest way to explore API Tester is to run the built-in example application, which spins up a mock REST API together with the embedded UI:

```bash
# 1. Clone the repository
git clone https://github.com/rdhmuhammad/apitester.git
cd apitester

# 2. Run the example server
go run _example/main.go --port 8080 --collection _example/collection.json
```

Then open your browser at **[http://localhost:8080](http://localhost:8080)**.

The example server includes sample endpoints demonstrating:
* `GET /health` & `GET /api/users` (Public endpoints)
* `GET /api/items?category=&search=` (Query parameter filtering & pagination)
* `GET`, `PUT`, `PATCH`, `DELETE /api/items/{id}` (Path parameters and JSON bodies)
* `GET /api/secure/profile` & `POST /api/secure/action` (Bearer token authentication)
* `POST /api/upload` (Multipart form-data file uploads)
* `GET /api/headers` (Request headers inspection)

---

### 🔌 Embedding in Your Go Service

Install the module in your Go project:

```bash
go get github.com/rdhmuhammad/apitester
```

Mount `apitester` onto your HTTP router in just a few lines:

```go
package main

import (
	"log"
	"net/http"

	"github.com/rdhmuhammad/apitester"
)

func main() {
	// Initialize Apitester with options
	docs, err := apitester.NewDocs(
		apitester.WithCollectionPath("resource/apidocs/collection.json"),
		apitester.WithRoutePrefix("/api/v1"),
		// Optional: Protect documentation with credentials
		// apitester.WithCredentials("admin", "secret123"),
	)
	if err != nil {
		log.Fatalf("Failed to initialize apitester: %v", err)
	}

	mux := http.NewServeMux()

	// Register your application routes
	mux.HandleFunc("GET /health", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("OK"))
	})

	// Mount the documentation UI and collection endpoints
	mux.Handle("/", docs)

	log.Println("Server running at http://localhost:8080/")
	if err := http.ListenAndServe(":8080", mux); err != nil {
		log.Fatal(err)
	}
}
```

---

### 🎨 Frontend Development (Optional)

If you want to contribute to or customize the GUI:

```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
pnpm install

# Start the Vite development server
pnpm run dev
```

To build the static assets into `frontend/dist` (which Go embeds via `embed.FS`):

```bash
pnpm run build
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONFIGURATION OPTIONS -->
## ⚙️ Configuration Options

When initializing `apitester.NewDocs(opts...)`, you can customize behavior using functional options or environment variables:

| Option | Environment Variable | Default | Description |
| :--- | :--- | :--- | :--- |
| `WithCollectionPath(path)` | `COLLECTION_PATH` | `resource/apidocs/collection.json` | Path to your Postman collection JSON file. |
| `WithRoutePrefix(prefix)` | — | `/api/v1` | URL prefix for Apitester internal API routes (`/collection/read`, `/collection/write`, `/auth/*`). |
| `WithCredentials(user, pass)` | `ADMIN_USERNAME`, `ADMIN_PASSWORD` | `""` *(Disabled)* | When specified, enables JWT cookie authentication for accessing the UI. |

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## 🧩 Roadmap

The following items represent the planned direction of the project and upcoming features:

- [x] Multi-tab request workspace (open and edit multiple requests simultaneously)
- [x] In-browser script runner & test assertions (powered by Sandpack)
- [x] Live collection synchronization (Bi-directional Push/Pull & File Watcher)
- [x] Authentication & protected documentation mode
- [x] Dark mode support
- [x] Folder tree search and request/folder deletion
- [ ] Automatic API Docs generator for Golang (scanning controller structs and handlers)
- [x] Automatic API Docs generator for Java Spring ([apitester-generator-spring](https://github.com/rdhmuhammad/apitester-generator-spring))

See the [project backlog](https://github.com/users/rdhmuhammad/projects/1) for a full list of proposed features.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## 👨‍💻 Contributing

Contributions make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you'd like to contribute, please follow these guidelines:

1. Send an email to `rdhmuhammad57@gmail.com` with the subject line: `APITESTER CONTRIBUTE`, or open an issue on GitHub to discuss your proposal.
2. Fork the project and create your feature branch:
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Ensure tests pass:
   ```bash
   go test ./...
   cd frontend && pnpm run build
   ```
4. Commit your changes:
   ```bash
   git commit -m "feat: add some AmazingFeature"
   ```
5. Push to the branch:
   ```bash
   git push origin feature/AmazingFeature
   ```
6. Open a Pull Request.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### 🤷️ Top contributors

<a href="https://github.com/rdhmuhammad/apitester/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=rdhmuhammad/apitester" alt="contrib.rocks image" />
</a>

<!-- LICENSE -->
## 🗃 License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## ☎️ Contact

Ridho Muhammad - [medium.com/@5mblackburn7](https://medium.com/@5mblackburn7) - rdhmuhammad57@gmail.com

Project Link: [https://github.com/rdhmuhammad/apitester](https://github.com/rdhmuhammad/apitester)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/rdhmuhammad/apitester.svg?style=for-the-badge
[contributors-url]: https://github.com/rdhmuhammad/apitester/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/rdhmuhammad/apitester.svg?style=for-the-badge
[forks-url]: https://github.com/rdhmuhammad/apitester/network/members
[stars-shield]: https://img.shields.io/github/stars/rdhmuhammad/apitester.svg?style=for-the-badge
[stars-url]: https://github.com/rdhmuhammad/apitester/stargazers
[issues-shield]: https://img.shields.io/github/issues/rdhmuhammad/apitester.svg?style=for-the-badge
[issues-url]: https://github.com/rdhmuhammad/apitester/issues
[license-shield]: https://img.shields.io/badge/license-MIT-blue?style=for-the-badge
[license-url]: https://github.com/rdhmuhammad/apitester/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/ridhomuhammad57
