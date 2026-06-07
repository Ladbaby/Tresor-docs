# 📚 Tresor Documentation

Documentation site for [Tresor](https://github.com/ladbaby/tresor) — an LLM traffic interception and routing engine.

Built with [Docusaurus](https://docusaurus.io/). Deployed to [GitHub Pages](https://ladbaby.github.io/tresor-docs/).

## 🛠️ Local Development

```bash
# Install dependencies (first time only)
npm install

# Start development server with hot reload
npm start

# Build for production
npm run build

# Serve the built site locally
npm run serve
```

## 📁 Project Structure

```
├── docs-content/        # MDX documentation source files
│   ├── user/            # User-facing documentation
│   └── dev/             # Developer documentation
├── src/                 # Custom CSS, homepage redirect
├── static/              # Images, favicon
├── docusaurus.config.ts # Site configuration
├── sidebars.ts          # Sidebar definitions
└── .github/workflows/   # CI deployment
```

## ✏️ Editing Docs

Docs use MDX format. Internal links should use **relative paths** (e.g., `docs/user/configuration/basics`) — Docusaurus automatically prepends the `baseUrl`.

See the [Contributing](docs-content/dev/contributing.mdx) page for full conventions.
