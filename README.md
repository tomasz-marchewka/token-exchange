# token-exchange

A secure and reliable web application designed for seamless token swapping. It provides real-time market data, transparent transactions, and an intuitive interface for both beginners and advanced users.

## Getting Started

This project is built within an [Nx](https://nx.dev) monorepo. Make sure you have Node.js and npm (or your preferred package manager) installed.

### 1. Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/tomasz-marchewka/token-exchange.git
cd token-exchange
npm install
```

## Development Commands

All commands should be run from the root of the project.

### Running the Application

To start the development server for the `simple-swap` application:

```bash
nx serve simple-swap
```
The application will be available at `http://localhost:4200`.

### Building the Project

To create a production-ready build of the `simple-swap` application:

```bash
nx build simple-swap
```
The build artifacts will be stored in the `dist/apps/simple-swap` directory.

### Running Tests

To run unit tests for a specific project, use the `test` target.

- **Test the application:**
  ```bash
  nx test simple-swap
  ```

- **Test the UI library:**
  ```bash
  nx test ui
  ```

### Linting

To check the code for style and quality issues:

- **Lint the application:**
  ```bash
  nx lint simple-swap
  ```

- **Lint the UI library:**
  ```bash
  nx lint ui
  ```

## License

This project is licensed under the
[Creative Commons Attribution-NonCommercial 4.0 International License](https://creativecommons.org/licenses/by-nc/4.0/).

⚠️ This code was prepared as part of a recruitment task.  
It may be viewed, run, and evaluated, but **cannot be used commercially**.
