import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe') as HTMLElement;

const timeout = function (s: number): Promise<Error> {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

////////////////////////////////////////////////

interface Ingredient {
  description: string;
  quantity: number;
  unit: string;
}

interface Recipe {
  id: string;
  title: string;
  publisher: string;
  sourceUrl: string;
  image: string;
  servings: number;
  cookingTime: number;
  ingredients: Ingredient[];
}

function renderSpinner(parentEl: HTMLElement): void {
  const markup: string = `
        <div class="spinner">
          <svg>
            <use href="src/img/icons.svg#icon-loader"></use>
          </svg>
        </div>
`;

  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('afterbegin', markup);
}

async function showRecipe(): Promise<void> {
  try {
    const id = window.location.hash.slice(1);

    // 1. Loading recipe
    renderSpinner(recipeContainer);
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    const recipeFromAPI = data.data.recipe;
    const recipe: Recipe = {
      id: recipeFromAPI.id,
      title: recipeFromAPI.title,
      publisher: recipeFromAPI.publisher,
      sourceUrl: recipeFromAPI.source_url,
      image: recipeFromAPI.image_url,
      servings: recipeFromAPI.servings,
      cookingTime: recipeFromAPI.cooking_time,
      ingredients: recipeFromAPI.ingredients,
    };

    // 2. rendering recipe
    const markup: string = `
        <figure class="recipe__fig">
          <img src="${recipe.image}" alt="${
      recipe.title
    }" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${recipe.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="src/img/icons.svg#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${
              recipe.cookingTime
            }</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="src/img/icons.svg#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${
              recipe.servings
            }</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="src/img/icons.svg#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="src/img/icons.svg#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated">
            <svg>
              <use href="src/img/icons.svg#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round">
            <svg class="">
              <use href="src/img/icons.svg#icon-bookmark-fill"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
              ${recipe.ingredients
                .map(ingredient => {
                  return `
                  <li class="recipe__ingredient">
                    <svg class="recipe__icon">
                      <use href="src/img/icons.svg#icon-check"></use>
                    </svg>
                    <div class="recipe__quantity">${ingredient.quantity}</div>
                    <div class="recipe__description">
                      <span class="recipe__unit">${ingredient.unit}</span>
                      ${ingredient.description}
                    </div>
                  </li>   
                `;
                })
                .join('')}
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${
              recipe.publisher
            }</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${recipe.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </a>
        </div>`;

    recipeContainer.innerHTML = '';
    recipeContainer.insertAdjacentHTML('afterbegin', markup);
  } catch (err) {
    console.error((err as Error).message);
  }
}

window.addEventListener('hashchange', showRecipe);
window.addEventListener('load', showRecipe);
