# chat-cicd

This repository contains a NodeJS application with workflows for continuous integration and continuous deployment (CI/CD).

## Overview

The application is a simple NodeJS module. The CI/CD workflows are defined using GitHub Actions and automate the build, test, linting, and deployment processes.

## Key Features

-   **Automated Builds:** Automatically builds the application on every push or pull request to the `main` branch.
-   **Automated Testing:** Runs unit tests to ensure code quality and prevent regressions.
-   **Linting and Style Checks:** Enforces code style and identifies potential issues using linters.
-   **Static Analysis Security Testing (SAST):** Performs static analysis to identify security vulnerabilities.
-   **Dockerization:** Builds and pushes Docker images for easy deployment.
-   **Slack Notifications:** Sends Slack notifications to notify the team about required approvals for deployments.

## Getting Started

To get started with this project, follow these steps:

1.  Clone the repository: `git clone <repository-url>`
2.  Install dependencies: `npm install`
3.  Run tests: `npm test`
4.  Build the application: `npm run build`

## CI/CD Pipeline

The CI/CD pipeline is defined in `.github/workflows/deploy-approval.yml` and consists of the following stages:

1.  **Build:** Builds the application using different NodeJS versions.
2.  **Test:** Runs unit tests.
3.  **Lint:** Performs code linting.
4.  **Style:** Checks code style.
5.  **SAST:** Runs static analysis security testing.
6.  **Docker:** Builds and pushes the Docker image to Docker Hub after approval.
