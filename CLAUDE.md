# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Repo Is

Documentation site for [Tresor](https://github.com/Ladbaby/Tresor), a single-binary LLM gateway. Built with **Docusaurus 3.10.1** (TypeScript). Deployed to GitHub Pages at `https://ladbaby.github.io/Tresor-docs/`.

## Commands

```bash
npm install          # First time only
npm start            # Dev server with hot reload
npm run build        # Production build (output in build/)
npm run serve        # Serve production build locally
npm run typecheck    # TypeScript type checking
```

No linter or formatter configured. Run `npm run typecheck` to validate TypeScript.

**Node.js 20+ required** (enforced in `package.json` engines).

## Gotchas

### Docs source is `docs-content/`, NOT `docs/`

The Docusaurus config maps `path: './docs-content'` to `routeBasePath: 'docs'`. All `.mdx` source files live under `docs-content/user/` and `docs-content/dev/`. The URL path prefix is `/Tresor-docs/` (set by `baseUrl` in config).

### Internal links must use absolute paths with full site path

Always use the full path including `baseUrl`, e.g., `/Tresor-docs/docs/user/configuration` — **NOT** `docs/user/configuration`. 

### Deployment is via `deploy.ps1` only

The `.github/workflows/deploy.yml` CI workflow exists but is **not used**. Deployment uses `deploy.ps1` (legacy `yarn deploy` flow). Do not modify the CI workflow unless asked.

## Documentation Conventions

- All docs use `.mdx` format
- Frontmatter **must** include `title` and `description` on every page
- Use `<Tabs>` and `<TabItem>` components for platform-specific instructions
- Two sidebar categories in `sidebars.ts`: `userSidebar` (user docs) and `devSidebar` (dev docs)
- When adding new pages, register them in the correct sidebar in `sidebars.ts`
- Custom gold/amber theme in `src/css/custom.css` — match the palette for new styling
- Homepage is a custom React page at `src/pages/index.tsx` (not the Docusaurus default)
