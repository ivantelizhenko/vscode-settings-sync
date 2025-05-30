import { View } from './View';

class AddRecipeView extends View {
  parentElement = document.querySelector('.upload') as HTMLFormElement;
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

  private addHandlerShowWindow() {
    this.btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }

  private addHandlerHideWindow() {
    this.btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this.overlay.addEventListener('click', this.toggleWindow.bind(this));
  }

  addHandlerUpload(handler) {
    this.parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }

  generateMarkup() {}
}

export default new AddRecipeView();
