document.addEventListener('DOMContentLoaded', () => {
    const isRecipeDetail = document.body.classList.contains('recipe-detail-page');
    
    if (isRecipeDetail) {
        initRecipeDetail();
    } else {
        initRecipeList();
    }

    // --- Recipe List Logic ---
    async function initRecipeList() {
        const recipeList = document.getElementById('recipe-list');
        const searchInput = document.getElementById('search');

        let recipesIndex = [];

        try {
            const response = await fetch('recipes/index.json');
            recipesIndex = await response.json();
        } catch (error) {
            console.error('Error loading recipe index:', error);
            recipeList.innerHTML = '<p class="no-results">Error loading recipes. Please ensure you are running on a web server.</p>';
            return;
        }

        function displayRecipes(recipes) {
            recipeList.innerHTML = '';
            
            if (recipes.length === 0) {
                recipeList.innerHTML = '<p class="no-results">No recipes found matching your search.</p>';
                return;
            }

            const groups = recipes.reduce((acc, recipe) => {
                if (!acc[recipe.category]) acc[recipe.category] = [];
                acc[recipe.category].push(recipe);
                return acc;
            }, {});

            const categoryOrder = [
                'Rice and Tiffin',
                'Main Dishes and Curries',
                'Snacks and Appetizers',
                'Pickles',
                'Powders and Masalas',
                'Sweets and Desserts',
                'Soups'
            ];

            categoryOrder.forEach(category => {
                if (groups[category]) {
                    const section = document.createElement('section');
                    section.className = 'category-section';
                    
                    const h2 = document.createElement('h2');
                    h2.className = 'category-title';
                    h2.innerText = category;
                    
                    const ul = document.createElement('ul');
                    ul.className = 'recipe-item-list';
                    ul.innerHTML = groups[category].map(recipe => `
                        <li class="recipe-item">
                            <a href="recipe.html?file=${recipe.file}" class="recipe-item-link">
                                <div class="recipe-item-content">
                                    <span class="recipe-item-en">${recipe.title_en}</span>
                                    ${recipe.title_ta ? `<span class="recipe-item-ta">${recipe.title_ta}</span>` : ''}
                                </div>
                            </a>
                        </li>
                    `).join('');
                    
                    section.appendChild(h2);
                    section.appendChild(ul);
                    recipeList.appendChild(section);
                }
            });
        }

        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filteredRecipes = recipesIndex.filter(recipe => 
                recipe.title_en.toLowerCase().includes(searchTerm) || 
                (recipe.title_ta && recipe.title_ta.toLowerCase().includes(searchTerm)) ||
                recipe.category.toLowerCase().includes(searchTerm)
            );
            displayRecipes(filteredRecipes);
        });

        displayRecipes(recipesIndex);
    }

    // --- Recipe Detail Logic ---
    async function initRecipeDetail() {
        const urlParams = new URLSearchParams(window.location.search);
        const fileName = urlParams.get('file');
        
        if (!fileName) {
            document.getElementById('recipe-title').innerText = 'No recipe specified';
            return;
        }

        let recipe;
        try {
            const response = await fetch(`recipes/${fileName}`);
            if (!response.ok) throw new Error('Recipe not found');
            recipe = await response.json();
        } catch (error) {
            console.error('Error loading recipe:', error);
            document.getElementById('recipe-title').innerText = 'Recipe not found';
            return;
        }

        // Use recipe-specific default servings or disable calculator if null/0
        const defaultServings = recipe.default_servings || 0;
        const servingsInput = document.getElementById('servings');
        const servingsContainer = document.querySelector('.servings-container');
        
        if (defaultServings > 0) {
            servingsInput.value = defaultServings;
            servingsContainer.style.display = 'flex';
        } else {
            servingsContainer.style.display = 'none';
        }
        
        document.title = `${recipe.title_en} | Soundravalli's Recipes`;
        document.getElementById('recipe-title').innerText = recipe.title_en;
        document.getElementById('recipe-subtitle').innerText = recipe.title_ta || '';
        document.getElementById('recipe-category').innerHTML = `<code>${recipe.category}</code>`;

        const contentDiv = document.getElementById('recipe-content');

        function parseIngredient(ing) {
            const regex = /^(.+?)\s*(?:-\s*)?(\d+(?:\.\d+)?|\d+\/\d+)\s*(.*)$/;
            const match = ing.match(regex);
            
            if (match) {
                let qty = match[2];
                if (qty.includes('/')) {
                    const [num, den] = qty.split('/');
                    qty = parseFloat(num) / parseFloat(den);
                } else {
                    qty = parseFloat(qty);
                }
                return { name: match[1].trim(), qty: qty, unit: match[3].trim() };
            }
            return { name: ing, qty: null, unit: '' };
        }

        function scaleIngredients(servings) {
            let markdown = "";
            
            if (recipe.notes && recipe.notes.length > 0) {
                markdown += recipe.notes.map(note => `> ${note}`).join('\n\n') + "\n\n";
            }

            if (recipe.ingredients && recipe.ingredients.length > 0) {
                markdown += "### Ingredients\n\n";
                markdown += recipe.ingredients.map(ingStr => {
                    const parsed = parseIngredient(ingStr);
                    if (parsed.qty !== null && defaultServings > 0) {
                        const scaledQty = (parsed.qty / defaultServings) * servings;
                        const displayQty = Math.round(scaledQty * 100) / 100;
                        return `- ${parsed.name} - ${displayQty} ${parsed.unit}`;
                    }
                    return `- ${ingStr}`;
                }).join('\n') + "\n\n";
            }

            markdown += "### Method\n\n";
            let stepCounter = 1;
            markdown += recipe.method.map((step) => {
                if (step.startsWith('###')) {
                    stepCounter = 1;
                    return step;
                }
                if (step.startsWith('**')) return step;
                return `${stepCounter++}. ${step}`;
            }).join('\n\n') + "\n";

            contentDiv.innerHTML = marked.parse(markdown);

            // Add original snippets if available
            if (recipe.original_snippets && recipe.original_snippets.length > 0) {
                const snippetSection = document.createElement('section');
                snippetSection.className = 'snippet-section';
                snippetSection.innerHTML = `
                    <h3 class="markdown-header">Original Handwritten Recipe</h3>
                    <div class="snippet-grid">
                        ${recipe.original_snippets.map(s => `
                            <div class="snippet-container">
                                <img src="assets/snippets/${s}" alt="Handwritten snippet" class="original-snippet">
                            </div>
                        `).join('')}
                    </div>
                `;
                contentDiv.appendChild(snippetSection);
            }
        }

        servingsInput.addEventListener('input', () => {
            const val = parseInt(servingsInput.value);
            if (val > 0) {
                scaleIngredients(val);
            }
        });

        // Initial render
        scaleIngredients(defaultServings || 1);

        // --- Cusdis Integration ---
        const cusdisThread = document.getElementById('cusdis_thread');
        if (cusdisThread) {
            const pageId = fileName.replace('.json', ''); 
            const pageUrl = window.location.href;
            const pageTitle = recipe.title_en;

            cusdisThread.setAttribute('data-page-id', pageId);
            cusdisThread.setAttribute('data-page-url', pageUrl);
            cusdisThread.setAttribute('data-page-title', pageTitle);

            if (!document.getElementById('cusdis-script')) {
                const script = document.createElement('script');
                script.id = 'cusdis-script';
                script.src = 'https://cusdis.com/js/cusdis.es.js';
                script.async = true;
                script.defer = true;
                document.body.appendChild(script);
            } else if (window.CUSDIS) {
                window.CUSDIS.renderWidget(cusdisThread);
            }
        }
    }
});
