# Changelog

All notable changes to this template are documented here.

This project follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)  
and adheres to [Semantic Versioning](https://semver.org/).

---

# 📦 Change Log — v1.1.0: Fabalos Launch

**Version:** `1.1.0`  
**Date:** `2025-06-21`  
**Status:** ✅ Stable & Deploy-Ready  
**Description:** First public-ready release of the **Fabalos Automation Portfolio**. Modular, styled, and emotionally coded.

---

## ✅ Features

- 🌐 **Homepage Hero** with logo, call-to-actions, and responsive layout  
- 🧠 **About Section** explaining Fabalos Automation purpose  
- ⚙️ **Case Study Cards** layout (1 active, expandable)  
- 📬 **Email CTA Section**: “Let’s Talk” with styled buttons  
- 📱 **Responsive Navigation** with mobile hamburger + slide-in  
- 🖌️ **Tailwind CSS v4** architecture with modular styles (`layout.css`, `theme.css`, `global.css`)  
- 🧪 **Utility class setup**: `bg-primary`, `text-soft`, `btn-primary`, `btn-ghost`, etc.  
- 💻 **VS Code + Git integration**: proper encoding, profile scripting (`fabagreet`, `fabaclean`)  

---

## 🧰 Technical Fixes

- ✅ Resolved `border-primary` utility issues  
- ✅ Removed recursive import loop (`theme.css`)  
- ✅ Fixed `chcp` encoding bug in PowerShell profile  
- ✅ Emojis now render in UTF-8 terminal  
- ✅ Vite + Tailwind plugins cleaned and aligned  

---

## 🚧 Known Work-in-Progress

- [ ] Final polish for **Case Study Detail Pages**  
- [ ] Add **Favicon metadata**  
- [ ] Add **SEO Metadata** in `<svelte:head>`  
- [ ] Footer and 404 page  
- [ ] Blog or journal section (future idea)  

---

## ⏫ Version Strategy

Using **Semantic Versioning (SemVer)**:  
`MAJOR.MINOR.PATCH`

- `MAJOR`: Breaking changes / new site structure  
- `MINOR`: New pages or features (e.g., second case study)  
- `PATCH`: Visual tweaks, bugfixes  

**Next target version:** `1.1.0` = when 2nd case study + metadata polishing is done.

---

## 📌 Git Tag (optional)
After pushing to GitHub:
```bash
git tag -a v1.0.0 -m "🎉 Fabalos v1.0.0 - First public-ready release"
git push origin v1.0.0
```

## [0.2.0] - 2025-06-18

### Removed
- Tailwind v4 CSS-first config established
- Global styles + layout scaffold complete
- Section components prepared: Hero, About, Services
- Removed tailwind.config.js in favor of `@theme` directive

## [0.1.0] – 2025-06-18

### Added
- Initial landing page structure with SvelteKit
- Global CSS with custom Fabalos palette + fonts
- README and project description
- Placeholder for case study route

