# rolldown-getting-started

![Rolldown](https://img.shields.io/npm/v/rolldown?style=for-the-badge&label=Rolldown&color=FF3E00)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-11-F69220?style=for-the-badge&logo=pnpm&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Rust](https://img.shields.io/badge/Powered_by-Rust-000000?style=for-the-badge&logo=rust&logoColor=white)

![GitHub last commit](https://img.shields.io/github/last-commit/gsaini/rolldown-getting-started?style=for-the-badge&logo=github)
![GitHub repo size](https://img.shields.io/github/repo-size/gsaini/rolldown-getting-started?style=for-the-badge&logo=github)
![GitHub top language](https://img.shields.io/github/languages/top/gsaini/rolldown-getting-started?style=for-the-badge&logo=github)

A minimal sample project that demonstrates [Rolldown](https://rolldown.rs/) — the Rust-based JavaScript bundler — following the official [Getting Started](https://rolldown.rs/guide/getting-started) guide.

## Project layout

```text
.
├── src/
│   ├── main.js     # Entry point
│   ├── hello.js    # Greeting module
│   └── math.js     # Tiny math helpers
├── rolldown.config.js
└── package.json
```

## Setup

This project uses [pnpm](https://pnpm.io/) as its package manager.

```bash
pnpm install
```

## Build

Bundle `src/main.js` into `dist/bundle.js` using the config file:

```bash
pnpm build
```

Or invoke the CLI directly:

```bash
pnpm exec rolldown src/main.js --file dist/bundle.js
```

## Run

```bash
pnpm start
```

Expected output:

```text
Hello Rolldown!
2 + 3 = 5
4 * 5 = 20
```
