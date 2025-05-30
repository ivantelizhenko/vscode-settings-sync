import { Data, SearchData } from '../utils/types';
import { View } from './View';

class PaginationView extends View {
  parentElement = document.querySelector('.pagination') as HTMLElement;
  protected declare data: Data<SearchData>;
  errorMessage = '';
  message = '';

  generateMarkup = () => {
    const numPage = Math.ceil(
      this.data.results.length / this.data.resultsPerPage
    );
    const curPage = this.data.page;

    // Page 1, and there are other pages
    if (curPage === 1 && numPage > 1) {
      return `
        <button class="btn--inline pagination__btn--next">
          <span>Page ${curPage + 1}</span>
          <svg class="search__icon">
            <use href="src/img/icons.svg#icon-arrow-right"></use>
          </svg>
        </button>
      `;
    }

    // Last page
    if (curPage === numPage && numPage > 1) {
      return `
      <button class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
      <use href="src/img/icons.svg#icon-arrow-left"></use>
      </svg>
      <span>Page ${curPage - 1}</span>
      </button>
      `;
    }

    // Other page
    if (curPage < numPage) {
      return `
      <button class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
      <use href="src/img/icons.svg#icon-arrow-left"></use>
      </svg>
      <span>Page ${curPage - 1}</span>
      </button>
      <button class="btn--inline pagination__btn--next">
      <span>Page ${curPage + 1}</span>
      <svg class="search__icon">
      <use href="src/img/icons.svg#icon-arrow-right"></use>
      </svg>
      </button>
      `;
    }

    // Page 1, and there are NO other pages
    return '';
  };

  generateMArkupButton(curPage: number = this.data.page) {
    const buttonPrev = `
      <button class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
        <use href="src/img/icons.svg#icon-arrow-left"></use>
        </svg>
        <span>Page ${curPage - 1}</span>
      </button>
    `;
    const buttonNext = `
      <button class="btn--inline pagination__btn--next">
        <span>Page ${curPage + 1}</span>
        <svg class="search__icon">
          <use href="src/img/icons.svg#icon-arrow-right"></use>
        </svg>
      </button>
    `;
  }
}

export default new PaginationView();
