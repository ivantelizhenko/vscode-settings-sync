import { Data, RecipePreview } from '../utils/types';
import { PreviewView } from './previewView';

class BookmarksView extends PreviewView {
  protected declare data: Data<RecipePreview>[];
  parentElement = document.querySelector(
    '.bookmarks__list'
  ) as HTMLUListElement;
  errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it :)';
  message = '';

  declare render: (data: RecipePreview[]) => void;

  generateMarkup = () => {
    return this.data.map(this.generateMarkupPreview).join('');
  };

  generateMarkupPreview(result: RecipePreview) {
    const id = window.location.hash.slice(1);

    return `
    <li class="preview">
      <a class="preview__link ${
        result.id === id ? 'preview__link--active' : ''
      }" href="#${result.id}">
        <figure class="preview__fig">
          <img src=${result.image} alt="${result.title}" />
        </figure>
        <div class="preview__data">
          <h4 class="preview__title">${result.title} ...</h4>
          <p class="preview__publisher">${result.publisher}</p>
        </div>
      </a>
    </li>
    `;
  }
}

export default new BookmarksView();
