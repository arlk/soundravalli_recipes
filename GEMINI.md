# Workspace Mandates: Soundravalli's Recipes

## Foundational Principles

- **Aesthetic Integrity:** Maintain the "Rendered Markdown" look. Do not add heavy cards, shadows, or rounded containers. The site should feel like a clean, white document.
- **Color Scheme:** Use Facebook Blue (`#1877f2`) for primary interaction elements (page titles, category headers, section titles, links, and focus states). Content body text should remain standard black (`#1c1e21`).
- **Naming Conventions:** Use Title Case for all category names and recipe titles. Use the word "and" instead of the "&" symbol.
- **Portion Scaling:** All ingredients should be defined in a way that the `script.js` scaling logic can parse (e.g., `Name - Quantity Unit`).

## Content Standards

- **Recipe Unification:** Group variations of the same base recipe (like Sambar or Rasam powders) into a single recipe entry using subheadings (e.g., `### Variation 1`).
- **Methods:** Always render recipe methods as numbered lists.
- **Tamil Support:** Always include the Tamil translation for recipe titles where available.
- **Portion Adjustments:** Recipes should include a `default_servings` value. Set to `0` for recipes like powders or pickles where a serving calculator is inappropriate.

## Technical Architecture

- **Static First:** This is a pure static site. Do not introduce build steps (Webpack, Vite, etc.) or external backend dependencies.
- **Data Driven:** All recipes must reside in the `recipes/` directory as individual JSON files.
- **Index Driven:** The main list is powered by `recipes/index.json`.
- **Markdown Rendering:** Use `marked.js` via CDN for all body content rendering.
