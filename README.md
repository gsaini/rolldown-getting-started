# rolldown-getting-started

A minimal sample project that demonstrates [Rolldown](https://rolldown.rs/) — the Rust-based JavaScript bundler — following the official [Getting Started](https://rolldown.rs/guide/getting-started) guide.

## Project layout

```
.
├── src/
│   ├── main.js     # Entry point
│   ├── hello.js    # Greeting module
│   └── math.js     # Tiny math helpers
├── rolldown.config.js
└── package.json
```

## Setup

```bash
npm install
```

## Build

Bundle `src/main.js` into `dist/bundle.js` using the config file:

```bash
npm run build
```

Or invoke the CLI directly:

```bash
./node_modules/.bin/rolldown src/main.js --file dist/bundle.js
```

## Run

```bash
npm start
```

Expected output:

```
Hello Rolldown!
2 + 3 = 5
4 * 5 = 20
```
