import { Data, Recipe } from '../utils/types';
import { View } from './View';

class RecipeView extends View {
  protected declare data: Data<Recipe>;
  parentElement = document.querySelector('.recipe') as HTMLElement;
  errorMessage = `We cound not find that recipe. Please try another one!`;
  message = '';

  declare render: (data: Recipe) => void;

  addHandlerRender(handler: () => void): void {
    window.addEventListener('hashchange', handler);
    window.addEventListener('load', handler);
  }

  addHandlerUpdateServings(handler: (n: number) => void) {
    this.parentElement.addEventListener('click', function (e) {
      const btn = (e.target as HTMLElement).closest(
        '.btn--update-servings'
      ) as HTMLButtonElement;
      if (!btn) return;

      const updateTo = +btn.dataset.updateTo!;
      if (!updateTo || updateTo === 0) return;

      handler(updateTo);
    });
  }

  addHandlerUpdateBookmark(handler: () => void) {
    this.parentElement.addEventListener('click', function (e) {
      const btn = (e.target as HTMLElement).closest(
        '.btn--bookmark'
      ) as HTMLButtonElement;
      if (!btn) return;
      handler();
    });
  }

  generateMarkup = () => {
    return `
        <figure class="recipe__fig">
          <img src="${this.data.image}" alt="${
      this.data.title
    }" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this.data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="src/img/icons.svg#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${
              this.data.cookingTime
            }</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="src/img/icons.svg#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${
              this.data.servings
            }</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-to="${
                this.data.servings - 1
              }">
                <svg>
                  <use href="src/img/icons.svg#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings" data-update-to="${
                this.data.servings + 1
              }">
                <svg>
                  <use href="src/img/icons.svg#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated">
          </div>
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="src/img/icons.svg#icon-bookmark${
                this.data.bookmarked ? '-fill' : ''
              }"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
              ${
                this.data.ingredients &&
                this.data.ingredients
                  .map(ingredient => {
                    return `
                  <li class="recipe__ingredient">
                    <svg class="recipe__icon">
                      <use href="src/img/icons.svg#icon-check"></use>
                    </svg>
                    <div class="recipe__quantity">${
                      ingredient.quantity === null
                        ? 'Some'
                        : ingredient.quantity
                    }</div>
                    <div class="recipe__description">
                      <span class="recipe__unit">${ingredient.unit}</span>
                      ${
                        ingredient.quantity === null
                          ? ingredient.description.toLowerCase()
                          : ingredient.description
                      }
                    </div>
                  </li>   
                `;
                  })
                  .join('')
              }
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${
              this.data.publisher
            }</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this.data.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </a>
        </div>`;
  };
}

export default new RecipeView();
