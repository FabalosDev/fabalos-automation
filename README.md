<p align="center">
  <img src="https://img.shields.io/badge/version-1.3.0-blueviolet" alt="Version">
  <img src="https://img.shields.io/badge/license-MIT-purple" alt="License">
  <img src="https://img.shields.io/badge/built_with-SvelteKit-orange" alt="Built with SvelteKit">
  <img src="https://img.shields.io/badge/styling-TailwindCSS%20v4.1-blue" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/automation-Make.com%20%2B%20n8n-brightgreen" alt="Automation Stack">
  <img src="https://img.shields.io/badge/foxified-yes-ff69b4" alt="Foxified">
</p>

# 🦊 **Fabalos Automation – Portfolio & Case Study System**

A modern SvelteKit-based automation portfolio showcasing real-world case studies in **Make.com, n8n, GPT workflows, and system design**.

This site serves as the official public profile of **Fabalos** — a Mechatronics Engineer turned Automation Architect.

---

## 🚀 **Overview**

- Fully redesigned automation portfolio
- Hero section with animated stack carousel
- Dynamic case study system (`/case-study/[slug]`)
- Data-driven structure using JSON
- Modular components and Foxther-branded theme
- Clean, responsive layout with dark/light support

---

## 🧱 **Project Structure**

```text
src/
 ├─ lib/
 │   ├─ components/
 │   ├─ layouts/
 │   └─ utils/
 ├─ routes/
 │   ├─ +page.svelte        → homepage
 │   ├─ case-study/
 │   │     ├─ +page.svelte → listing page
 │   │     └─ [slug]/
 │   │          └─ +page.svelte → dynamic case pages
data/
 └─ case-studies.json       → master dataset
```

---
## 🧠 **Case Study System**

All case studies are stored inside:

`/data/case-studies.json`

Each entry contains:

`{   "slug": "make-tagging-automation",   "title": "Make.com + GPT Tagging Automation",   "summary": "Automated product tagging using GPT and Sheets.",   "badge": ["Automation", "AI"],   "image": "/images/case-tagging.png" }`

Pages are generated automatically via `[slug]`.

This allows **12+ professional case studies** without repetitive manual work.

---

## 🛠️ **Tech Stack**

- **SvelteKit** — main framework

- **TailwindCSS v4.1** — design system

- **Make.com + n8n** — automation backend

- **GPT models** — logic narration, flow generation

- **Supabase (optional)** — future DB layer

- **Cloudflare + Vercel** — deployment-ready


---

## 📄 **Pages**

|Route|Description|
|---|---|
|`/`|Hero + brand positioning + stack carousel|
|`/case-study`|Case study gallery (Level 1 public view)|
|`/case-study/[slug]`|Full deep-dive case study pages|
|`/projects` _(future)_|Expanded automation portfolio|
|`/tools` _(future)_|FoxOps internal/external tools|

---

## 🎨 **Branding**

The site uses the **Foxther Theme**, including:

- orange primary

- matte surfaces

- neon-hover buttons

- softened typography

- dark/light system tokens


---

## 🔖 **Versioning**

- **1.3.0** — Case study dynamic routing + data model

- **1.2.0** — Components stable + theme cleanup

- **1.0.0** — Public release


Full history in `CHANGELOG.md`.

---

## 📜 **License**

**MIT** — free to use, modify, self-host.
Attribution appreciated. 🦊