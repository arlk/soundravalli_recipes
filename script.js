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

            // Add original snippets as thumbnails if available
            if (recipe.original_snippets && recipe.original_snippets.length > 0) {
                const snippetSection = document.createElement('section');
                snippetSection.className = 'snippet-section';
                snippetSection.innerHTML = `
                    <h3 class="markdown-header">Original Handwritten Recipe</h3>
                    <p style="font-size: 0.85rem; color: #65676b; margin-bottom: 15px;">Click to expand handwritten notes</p>
                    <div class="snippet-grid">
                        ${recipe.original_snippets.map((s, idx) => `
                            <div class="snippet-container" data-index="${idx}">
                                <img src="assets/snippets/${s}" alt="Handwritten snippet thumbnail" class="original-snippet">
                            </div>
                        `).join('')}
                    </div>
                `;
                contentDiv.appendChild(snippetSection);
                
                // Initialize Lightbox
                initLightbox(recipe.original_snippets);
            }
        }

        function initLightbox(snippets) {
            const lightbox = document.getElementById('lightbox');
            const lightboxImg = document.getElementById('lightbox-img');
            const lightboxCaption = document.getElementById('lightbox-caption');
            const closeBtn = document.querySelector('.lightbox-close');
            const prevBtn = document.getElementById('prev-btn');
            const nextBtn = document.getElementById('next-btn');
            let currentIndex = 0;

            function showImage(index) {
                currentIndex = index;
                lightboxImg.src = `assets/snippets/${snippets[currentIndex]}`;
                lightboxCaption.innerText = `Image ${currentIndex + 1} of ${snippets.length}`;
                
                // Show/hide nav buttons based on count
                if (snippets.length <= 1) {
                    prevBtn.style.display = 'none';
                    nextBtn.style.display = 'none';
                } else {
                    prevBtn.style.display = 'flex';
                    nextBtn.style.display = 'flex';
                }
            }

            // Click on thumbnail
            document.querySelectorAll('.snippet-container').forEach(container => {
                container.addEventListener('click', () => {
                    const index = parseInt(container.getAttribute('data-index'));
                    showImage(index);
                    lightbox.classList.add('active');
                    document.body.style.overflow = 'hidden'; // Prevent scrolling
                });
            });

            // Close lightbox
            const closeLightbox = () => {
                lightbox.classList.remove('active');
                document.body.style.overflow = 'auto';
            };

            closeBtn.addEventListener('click', closeLightbox);
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) closeLightbox();
            });

            // Navigation
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                let newIndex = currentIndex - 1;
                if (newIndex < 0) newIndex = snippets.length - 1;
                showImage(newIndex);
            });

            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                let newIndex = currentIndex + 1;
                if (newIndex >= snippets.length) newIndex = 0;
                showImage(newIndex);
            });

            // Keyboard support
            document.addEventListener('keydown', (e) => {
                if (!lightbox.classList.contains('active')) return;
                if (e.key === 'Escape') closeLightbox();
                if (e.key === 'ArrowLeft') prevBtn.click();
                if (e.key === 'ArrowRight') nextBtn.click();
            });
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
