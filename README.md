<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
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
    And integrate ecosystem for integration testing, read specification directly from code then run on gui like a postman
    <br />
    <a href="https://github.com/github_username/repo_name"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/github_username/repo_name">View Demo</a>
    &middot;
    <a href="https://github.com/rdhmuhammad/apitester/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/rdhmuhammad/apitester/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>


<!-- ABOUT THE PROJECT -->
## 📖 About The Project

<div align="center">
    <img src="https://raw.githubusercontent.com/rdhmuhammad/apitester/refs/heads/main/resource/example_gui/request.png" width="250" alt="Example request">
    <img src="https://raw.githubusercontent.com/rdhmuhammad/apitester/refs/heads/main/resource/example_gui/response.png" width="250" alt="Example response">
</div>

Have you ever gotten tired of manually creating Postman requests every time you finish an endpoint?
It gets even worse when you're working with endpoints that have massive request payloads like transaction APIs in e-commerce systems.
Which often contain multiple nested objects, arrays, and dozens of fields that all need valid values.
On top of that, you usually need to prepare several variations of the request to cover different test scenarios. 
It can be repetitive, time-consuming, and honestly, pretty frustrating.
<br>
</br>
Driven by these frustrations, my initial workaround was to delegate the task to agentic AI. While it worked, I felt that using AI for something highly repetitive and deterministic was a waste of resources. Many of these tasks can be automated without requiring an LLM at all.

That's what motivated me to create this project.

The goal of this project is to reduce repetitive work during development. The first milestone is to build a generator that scans all controllers in a project and automatically generates API documentation, such as a `postman.json` collection.
The generated documentation can then be hosted using this project's ecosystem. You can run it on the same machine as your main service or deploy it to a dedicated server, it doesn't really matter. The only requirement is that the API tester can communicate with the target service through the generated API documentation.
By automating API documentation generation and hosting, developers can spend less time maintaining test collections and more time building features.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
* ![Tailwind](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
* ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
* ![Go](https://img.shields.io/badge/Language-V1.23.0-00ADD8?style=for-the-badge&logo=go&logoColor=white)
* ![Gin](https://img.shields.io/badge/Framework-Gin_Gonic-00ADD8?style=for-the-badge&logo=gin&logoColor=white)
* ![GORM](https://img.shields.io/badge/ORM-GORM-00ADD8?style=for-the-badge)
* ![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📚 Table of Contents

<details>
<summary>Click to expand</summary>

- 🚀 [Getting Started](#-getting-started)
    - 📦 [Prerequisites](#-prerequisites)
    - ▶️ [How to Run](#-how-to-run)
- 🧩 [Roadmap](#-roadmap)
- 👨‍💻 [Contributing](#-contributing)
    - 🤷️ [Top contributors](#-top-contributors)
- 🗃 [License](#-license)
- ☎️ [Contact](#-contact)

</details>


<!-- GETTING STARTED -->
## 🚀 Getting Started
This project consists of two applications:

* A Golang backend (To serve the api docs file)
* A React frontend (GUI)

For development, I usually run both applications locally with the required
language runtimes and tools installed on my machine.

If you prefer a containerized setup, I already include Docker Compose configuration. 
This allows anyone to get the entire stack up and running quickly without manually 
installing and configuring each dependency.

### 📦 Prerequisites
Before running the project **locally**, ensure the following tools are installed and available in your environment.
> **Note**: This project is currently focused on the Golang ecosystem
> because that's what I use in my day-to-day development. 
> It started as a tool for my own needs, but I plan to gradually extend it to support
> other languages and environments in the future.
* **Golang**: Version [1.24.0](https://go.dev/dl/) or higher
* **MySQL**: Version 8.0
* **NodeJS**: Version 22.0
* **PNPM**: Version [10.23.0](https://pnpm.io/10.x/installation#on-windows)

### ▶️ How to Run

1. Prepare your api docs file which following postman format e.g: `collection.json`
   > **Note**: You normally won't need to create this file manually. 
   > The intended workflow is to generate it automatically using 
   > an API docs generator. Check out the generator repository for setup 
   > instructions and more details[TODO].
2. Place the file at `resource/apidocs/your_file_name.json`
3. Copy ```env.example``` to ```env.[dev|stag|prod]```, choose your desired environment phase.
4. Install Backend dependencies
   ```bash
    go mod download
    ```
5. Start Backend application by running these command
   ```bash
   go run cmd/main.go --env .env.stag
   ```
6. Set backend base url to `frontend/.env`
   ```dotenv
   VITE_API_URL=http://localhost:8999/api/v1
   ```
7. Install Frontend application dependencies
   ```bash
   cd frontend
   pnpm run install
   ``` 
8. Start Frontend application by running these command
   ```bash
   pnpm run dev
   ``` 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## 🧩 Roadmap
The following items represent the planned direction of the 
project and upcoming features currently under consideration.

- [ ] Request page can open multiple request. and able to create new request
- [ ] API Docs generator for Golang
- [ ] API Docs generator for Java Spring
- [ ] Folder Tree has the meets the following criteria
  - [ ] Can show the new request.
  - [ ] Can modify the position, name of folder and request.
  - [ ] Can create, remove folder and request.
- [ ] Login page for user and user management for admin
- [ ] Collection change history from source pull

See the [project backlog](https://github.com/users/rdhmuhammad/projects/1) for a full list of proposed features.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## 👨‍💻 Contributing
I'd love to see this project grow with help from the community. 
If you'd like to contribute, please make sure to follow the protocols 
and guidelines described below before opening a pull request.

These rules aren't meant to be restrictive—they simply help keep the
project organized, maintainable, and easy to review. If you have 
questions, suggestions, or feature ideas, feel free to open an
issue and start a discussion.

1. Send an email to rdhmuhammad57@gmail.com with the subject line: APITESTER CONTRIBUTE
2. In the email, describe your idea, feature proposal, enhancement,
   or any improvement you would like to contribute to the project.
3. After reviewing the email, I will create a backlog item for the project so we
   can track the progress and evaluate whether the contribution 
   aligns with the project's primary goals and vision.
4. Create your Feature Branch from the Issue which related to backlog (`git checkout -b feature/AmazingFeature`)
5. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
6. Push to the Branch (`git push origin feature/AmazingFeature`)
7. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### 🤷️ Top contributors

<a href="https://github.com/rdhmuhammad/apitester/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=rdhmuhammad/apitester" alt="contrib.rocks image" />
</a>



<!-- LICENSE -->
## 🗃 License

Distributed under the project_license. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## ☎️ Contact

Ridho Muhammad - [medium.com/@5mblackburn7](https://medium.com/@5mblackburn7) - rdhmuhammad57@gmail.com

Project Link: [https://github.com/rdhmuhammad/apitester](https://github.com/rdhmuhammad/apitester)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
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
[product-screenshot]: images/screenshot.png
<!-- Shields.io badges. You can a comprehensive list with many more badges at: https://github.com/inttter/md-badges -->
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
