# 📦 Changelog

All notable changes to **Fabalos.com** are documented here.
This project follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and adheres to [Semantic Versioning](https://semver.org/).

---

# 📦 Change Log — v1.3.0: Fabalos Launch

## 🔖 v1.3.0 – Website Layout Update + Case Study System Foundation (2025-12-07)

### ✨ Added
- Introduced `/src/routes/case-study/data/` directory for JSON-based case study content.
- Prepared full Airtable → n8n → GitHub automation pipeline for dynamic case-study generation.
- Added restructuring hooks to support future CMS-style data ingestion.

### 🛠 Updated
- Refactored website layout to support content-driven pages.
- Improved overall file structure and routing logic under `src/routes/case-study`.
- Polished UI/UX and component organization for better maintainability.
- Updated version metadata and cleaned repository conventions.

### 🧹 Removed / Cleaned
- Temporary assets and outdated version markers.
- Old structural references replaced with the new data-driven architecture.

### 🚧 Notes
This version establishes the architecture for automated case-study publishing and prepares the repo for future v1.4.x enhancements, including full JSON ingestion and layout-driven rendering.

---

**Version:** `1.2.0`
**Date:** `2025-07-05`

## [1.2.0] – 2025-07-05
**Title:** Case Study Cleanup & Metadata Tools Integration
**Status:** ✅ Stable & Deploy-Ready

### ✨ Added
- 🏷️ `FabaMeta` command-line tools for asset metadata injection:
  - `faba-meta-make.cmd` – Make.com image assets
  - `faba-meta-furball.cmd` – The Purple Furball case study images
  - `faba-meta-foxther.cmd` – Official Foxther brand visuals

### 🔥 Removed
- ❌ `PromptForm` GPT demo component and lazy-load logic
- ❌ Case study Card 2 and the "Prompt-to-Response Flow" section
- ❌ Two-column grid layout (now replaced with single full-page case)

### 🎨 Updated
- ✏️ Case Studies page now focuses exclusively on Make.com product tagging
- 🌈 Text contrast improved using `rgba(255, 255, 255, 0.9)` for better readability

### 🧠 Notes
- Prompt demo is fully removed from production
- `FabaMeta` tools are local-use only (manual EXIF injection with ExifTool)

---

## [1.1.0] – 2025-06-21
**Title:** Fabalos Launch
**Status:** ✅ Stable & Deploy-Ready

### ✅ Features
- 🌐 Homepage Hero with logo, call-to-actions, and responsive layout
- 🧠 About section explaining Fabalos Automation purpose
- ⚙️ Case Study Cards layout (1 active, expandable)
- 📬 Email CTA section: “Let’s Talk” with styled buttons
- 📱 Responsive navigation with mobile hamburger + slide-in
- 🖌️ Tailwind CSS v4 structure with modular layers (`layout.css`, `theme.css`, `global.css`)
- 🧪 Utility class setup: `bg-primary`, `text-soft`, `btn-primary`, etc.
- 💻 VS Code + Git integration: encoding fixes, shell shortcuts (`fabagreet`, `fabaclean`)

### 🧰 Technical Fixes
- ✅ Fixed `border-primary` utility issue
- ✅ Removed recursive import loop in `theme.css`
- ✅ Patched `chcp` encoding bug in PowerShell profile
- ✅ Ensured emoji rendering in UTF-8 terminal
- ✅ Cleaned Vite + Tailwind plugin configs

### 🚧 Work in Progress
- [ ] Final polish for case study detail pages
- [ ] Add favicon metadata
- [ ] Add SEO metadata via `<svelte:head>`
- [ ] Footer and 404 page
- [ ] Blog or journal section (future idea)

---

## [1.0.0] – 2025-06-23
**Title:** Initial Public Release – Fabalos Automation Portfolio
**Status:** ✅ Stable & Deploy-Ready

### ✅ Features
- 🌐 Landing page with SvelteKit and Fabaverse branding
- 🧠 Section components: Hero, About, Services
- 🖌️ Global CSS with custom palette and typography
- 📬 Placeholder for case study route
- 📄 README and project metadata

### 📌 Git Tag
```bash
git tag -a v1.0.0 -m "🎉 Fabalos v1.0.0 - First public-ready release"
git push origin v1.0.