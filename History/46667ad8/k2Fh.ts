import { AddRecipe, Data } from '../utils/types';
import { View } from './View';

class AddRecipeView extends View {
  declare data: Data<{}>;

  parentElement = document.querySelector('.upload') as HTMLFormElement;
  errorMessage = '';
  message = 'Recipe was successfully uploaded :)';

  private window = document.querySelector('.add-recipe-window') as HTMLElement;
  private overlay = document.querySelector('.overlay') as HTMLElement;
  private btnOpen = document.querySelector(
    '.nav__btn--add-recipe'
  ) as HTMLButtonElement;
  private btnClose = document.querySelector(
    '.btn--close-modal'
  ) as HTMLButtonElement;

  constructor() {
    super();
    this.addHandlerShowWindow();
    this.addHandlerHideWindow();
  }

  toggleWindow() {
    this.overlay.classList.toggle('hidden');
    this.window.classList.toggle('hidden');
  }

  clear() {
    const markup: string = `
    <div class="upload__column">
          <h3 class="upload__heading">Recipe data</h3>
          <label>Title</label>
          <input value="TEST23" required name="title" type="text" />
          <label>URL</label>
          <input value="TEST23" required name="sourceUrl" type="text" />
          <label>Image URL</label>
          <input value="TEST23" required name="image" type="text" />
          <label>Publisher</label>
          <input value="TEST23" required name="publisher" type="text" />
          <label>Prep time</label>
          <input value="23" required name="cookingTime" type="number" />
          <label>Servings</label>
          <input value="23" required name="servings" type="number" />
`;

    this.clear();
    this.parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  private addHandlerShowWindow() {
    this.btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }

  private addHandlerHideWindow() {
    this.btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this.overlay.addEventListener('click', this.toggleWindow.bind(this));
  }

  addHandlerUpload(handler: (newRecipe: AddRecipe) => void) {
    this.parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data as AddRecipe);
    });
  }

  generateMarkup = function () {
    return '';
  };
}

export default new AddRecipeView();
