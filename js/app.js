const translations = {
  es: {
    siteTitle: "Recetarios de Aquí",
    subtitle: "Recetario de Cocina Puertorriqueña",
    author: "Inspirado en la obra de Berta Cabanillas — Edición 1983",
    searchPlaceholder: "Buscar recetas...",
    ingredients: "Ingredientes",
    steps: "Preparación",
    time: "Tiempo",
    servings: "Porciones",
    recipeCount: "recetas",
    footer: "Inspirado en el legado culinario de Berta Cabanillas y la cocina tradicional puertorriqueña.",
    categories: {
      frutas: "Frutas",
      cereales: "Cereales",
      granos: "Granos y Legumbres",
      ensaladas: "Ensaladas",
      sopas: "Sopas",
      carnes: "Carnes",
      aves: "Aves",
      pescados: "Pescado y Mariscos",
      huevos: "Huevos y Queso",
      entremeses: "Croquetas, Buñuelos y Pastelillos",
      bizcochos: "Bizcochos",
      galletitas: "Galletitas",
      pasteles_dulces: "Pasteles Dulces",
      panes: "Pan y Panecillos",
      emparedados: "Emparedados",
      postres: "Helados, Budines, Flan y Otros Postres",
      arroces: "Arroces y Habichuelas",
      vegetales: "Vegetales y Viandas",
      salsas: "Salsas y Aderezos",
      bebidas: "Bebidas",
      cocteles: "Cócteles y Tragos"
    }
  },
  en: {
    siteTitle: "Recetarios de Aquí",
    subtitle: "Puerto Rican Cookbook",
    author: "Inspired by the work of Berta Cabanillas — 1983 Edition",
    searchPlaceholder: "Search recipes...",
    ingredients: "Ingredients",
    steps: "Preparation",
    time: "Time",
    servings: "Servings",
    recipeCount: "recipes",
    footer: "Inspired by the culinary legacy of Berta Cabanillas and traditional Puerto Rican cuisine.",
    categories: {
      frutas: "Fruits",
      cereales: "Cereals",
      granos: "Legumes & Grains",
      ensaladas: "Salads",
      sopas: "Soups",
      carnes: "Meats",
      aves: "Poultry",
      pescados: "Fish & Seafood",
      huevos: "Eggs & Cheese",
      entremeses: "Croquettes, Fritters & Turnovers",
      bizcochos: "Cakes",
      galletitas: "Cookies",
      pasteles_dulces: "Sweet Pies & Pastries",
      panes: "Bread & Rolls",
      emparedados: "Sandwiches",
      postres: "Ice Cream, Puddings, Flan & Desserts",
      arroces: "Rice & Beans",
      vegetales: "Vegetables & Root Veggies",
      salsas: "Sauces & Dressings",
      bebidas: "Beverages",
      cocteles: "Cocktails & Drinks"
    }
  }
};

const categoryIcons = {
  frutas: "🍍",
  cereales: "🌾",
  granos: "🫘",
  ensaladas: "🥗",
  sopas: "🍲",
  carnes: "🥩",
  aves: "🍗",
  pescados: "🐟",
  huevos: "🥚",
  entremeses: "🧆",
  bizcochos: "🎂",
  galletitas: "🍪",
  pasteles_dulces: "🥧",
  panes: "🍞",
  emparedados: "🥪",
  postres: "🍮",
  arroces: "🍚",
  vegetales: "🌿",
  salsas: "🫙",
  bebidas: "🥤",
  cocteles: "🍹"
};

const categoryOrder = [
  "frutas", "cereales", "granos", "ensaladas", "sopas",
  "carnes", "aves", "pescados", "huevos", "entremeses",
  "bizcochos", "galletitas", "pasteles_dulces", "panes",
  "emparedados", "postres", "arroces", "vegetales",
  "salsas", "bebidas", "cocteles"
];

let currentLang = "es";
let openCategories = new Set();
let searchQuery = "";
let selectedNavCategory = null; // when a nav pill is clicked, only show that category

function init() {
  renderNavPills();
  renderCategories();
  updateTexts();
  setupEventListeners();
}

function setupEventListeners() {
  document.getElementById("search-input").addEventListener("input", (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    if (searchQuery) {
      selectedNavCategory = null;
      renderNavPills();
    }
    renderCategories();
  });

  document.getElementById("btn-es").addEventListener("click", () => switchLang("es"));
  document.getElementById("btn-en").addEventListener("click", () => switchLang("en"));

  document.getElementById("modal-overlay").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeModal();
  });

  document.getElementById("modal-close").addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

function switchLang(lang) {
  currentLang = lang;
  document.getElementById("btn-es").classList.toggle("active", lang === "es");
  document.getElementById("btn-en").classList.toggle("active", lang === "en");
  updateTexts();
  renderNavPills();
  renderCategories();

  const modal = document.getElementById("modal-overlay");
  if (modal.classList.contains("open")) {
    const recipeId = modal.dataset.recipeId;
    if (recipeId) {
      const recipe = recipes.find(r => r.id === recipeId);
      if (recipe) renderModal(recipe);
    }
  }
}

function updateTexts() {
  const t = translations[currentLang];
  document.getElementById("site-subtitle").textContent = t.subtitle;
  document.getElementById("site-author").textContent = t.author;
  document.getElementById("search-input").placeholder = t.searchPlaceholder;
  document.getElementById("footer-text").textContent = t.footer;
}

function renderNavPills() {
  const t = translations[currentLang];
  const container = document.getElementById("nav-pills");
  container.innerHTML = categoryOrder.map(cat => {
    const isActive = selectedNavCategory === cat;
    return `<button class="nav-pill${isActive ? " active" : ""}" data-category="${cat}">
      <span class="pill-icon">${categoryIcons[cat]}</span>${t.categories[cat]}
    </button>`;
  }).join("");

  container.querySelectorAll(".nav-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      const cat = btn.dataset.category;
      // Toggle: if same pill clicked again, show all categories
      if (selectedNavCategory === cat) {
        selectedNavCategory = null;
      } else {
        selectedNavCategory = cat;
      }
      openCategories.clear();
      openCategories.add(cat);
      renderNavPills();
      renderCategories();
      setTimeout(() => {
        const section = document.getElementById(`cat-${cat}`);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    });
  });
}

function getFilteredRecipes(category) {
  let filtered = recipes.filter(r => r.category === category);
  if (searchQuery) {
    filtered = filtered.filter(r => {
      const name = r.name[currentLang].toLowerCase();
      const ingredients = r.ingredients[currentLang].join(" ").toLowerCase();
      return name.includes(searchQuery) || ingredients.includes(searchQuery);
    });
  }
  return filtered;
}

function renderCategories() {
  const t = translations[currentLang];
  const container = document.getElementById("categories-container");

  // Determine which categories to show
  const categoriesToRender = selectedNavCategory && !searchQuery
    ? [selectedNavCategory]
    : categoryOrder;

  container.innerHTML = categoriesToRender.map(cat => {
    const catRecipes = getFilteredRecipes(cat);
    const isOpen = selectedNavCategory === cat || openCategories.has(cat) || searchQuery.length > 0;
    const allCatRecipes = recipes.filter(r => r.category === cat);

    if (searchQuery && catRecipes.length === 0) return "";

    return `
      <section class="category-section" id="cat-${cat}">
        <div class="category-header ${isOpen ? "open" : ""}" data-category="${cat}">
          <span class="cat-icon">${categoryIcons[cat]}</span>
          <span class="cat-title">${t.categories[cat]}</span>
          <span class="cat-count">${allCatRecipes.length} ${t.recipeCount}</span>
          <span class="chevron">▼</span>
        </div>
        <div class="category-body ${isOpen ? "open" : ""}">
          <div class="category-recipes">
            ${catRecipes.map(recipe => `
              <div class="recipe-card" data-recipe-id="${recipe.id}">
                <div class="recipe-name">${recipe.name[currentLang]}</div>
                <div class="recipe-meta">
                  <span>⏱ ${recipe.time}</span>
                  <span>👥 ${recipe.servings} ${t.servings.toLowerCase()}</span>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>
    `;
  }).join("");

  container.querySelectorAll(".category-header").forEach(header => {
    header.addEventListener("click", () => {
      const cat = header.dataset.category;
      if (openCategories.has(cat)) {
        openCategories.delete(cat);
      } else {
        openCategories.add(cat);
      }
      renderCategories();
    });
  });

  container.querySelectorAll(".recipe-card").forEach(card => {
    card.addEventListener("click", () => {
      const recipe = recipes.find(r => r.id === card.dataset.recipeId);
      if (recipe) openModal(recipe);
    });
  });
}

function openModal(recipe) {
  const modal = document.getElementById("modal-overlay");
  modal.dataset.recipeId = recipe.id;
  renderModal(recipe);
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function renderModal(recipe) {
  const t = translations[currentLang];
  const catName = t.categories[recipe.category];

  document.getElementById("modal-badge").textContent = `${categoryIcons[recipe.category]} ${catName}`;
  document.getElementById("modal-title").textContent = recipe.name[currentLang];
  document.getElementById("modal-time").textContent = `⏱ ${recipe.time}`;
  document.getElementById("modal-servings").textContent = `👥 ${recipe.servings} ${t.servings.toLowerCase()}`;
  document.getElementById("modal-ingredients-title").textContent = `🧾 ${t.ingredients}`;
  document.getElementById("modal-steps-title").textContent = `👩‍🍳 ${t.steps}`;

  document.getElementById("modal-ingredients-list").innerHTML =
    recipe.ingredients[currentLang].map(ing => `<li>${ing}</li>`).join("");

  document.getElementById("modal-steps-list").innerHTML =
    recipe.steps[currentLang].map(step => `<li>${step}</li>`).join("");
}

function closeModal() {
  const modal = document.getElementById("modal-overlay");
  modal.classList.remove("open");
  modal.dataset.recipeId = "";
  document.body.style.overflow = "";
}

document.addEventListener("DOMContentLoaded", init);
