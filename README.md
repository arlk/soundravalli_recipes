# Soundravalli's Recipes

A clean, categorized, and searchable recipe book featuring traditional and modern recipes.

## Features

- **Categorized View:** Recipes are grouped into logical categories like Rice and Tiffin, Sweets, and Pickles.
- **Dynamic Search:** Find recipes by name (English/Tamil), category, or ingredients.
- **Portion Adjustments:** Built-in servings calculator that automatically scales ingredient quantities.
- **Markdown Aesthetic:** A clean, typography-focused design inspired by technical documentation.
- **Responsive Design:** Optimized for desktops, tablets, and mobile phones.
- **Source Included:** Includes the original handwritten Tamil recipes in PDF format.

## Local Development

Due to the use of JavaScript `fetch()` for loading recipe data, you **must** use a local web server to view the site locally.

1.  **Install dependencies** for development tools:
    ```bash
    npm install
    ```
2.  **Start a server** in the project directory:
    ```bash
    # Using Python
    python3 -m http.server 8000
    ```
3.  **Open** `http://localhost:8000` in your browser.

## Code Standards and Formatting

This project uses **Prettier** for consistent code formatting and **Husky** for pre-commit hooks.
- To format all files: `npm run format`
- Formatting is automatically enforced on staged files during `git commit`.

## Project Structure

- `index.html`: The main landing page and recipe list.
- `recipe.html`: Template for displaying individual recipe details.
- `style.css`: Modern, minimalist styling with Facebook Blue accents.
- `script.js`: Core logic for data fetching, searching, and ingredient scaling.
- `recipes/`: Directory containing individual recipe JSON files.
- `recipes/index.json`: The index that powers the front-page listing.
- `package.json`: Configuration for Prettier and Husky hooks.
- `photo.jpeg`: Author's profile photo.
- `reciepes_original.pdf`: Source material (handwritten Tamil recipes).
- `GEMINI.md`: Project mandates and design standards.
