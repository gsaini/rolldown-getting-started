# rolldown-getting-started

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
