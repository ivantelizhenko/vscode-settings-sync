import { Data, SearchData } from '../utils/types';
import { View } from './View';

class PaginationView extends View {
  parentElement = document.querySelector('.pagination') as HTMLElement;
  protected declare data: Data<SearchData>;
  errorMessage = '';
  message = '';

  addHandlerClick(handler: Function) {
    this.parentElement.addEventListener('click', function (e) {
      const button = (e.target as HTMLButtonElement).closest('.btn--inline');
      console.log(button);
    });
  }

  generateMarkup = () => {
    const numPage = Math.ceil(
      this.data.results.length / this.data.resultsPerPage
    );
    const curPage = this.data.page;

    // Page 1, and there are other pages
    if (curPage === 1 && numPage > 1) {
      return this.generateMarkupButton('next');
    }

    // Last page
    if (curPage === numPage && numPage > 1) {
      return this.generateMarkupButton('prev');
    }

    // Other page
    if (curPage < numPage) {
      return (
        this.generateMarkupButton('prev') + this.generateMarkupButton('next')
      );
    }

    // Page 1, and there are NO other pages
    return '';
  };

  generateMarkupButton(
    type: 'prev' | 'next',
    curPage: number = this.data.page
  ): string {
    const iconArrowLeft = `
      <svg class="search__icon">
        <use href="src/img/icons.svg#icon-arrow-left"></use>
      </svg>
    `;
    const definePage = type === 'prev' ? curPage - 1 : curPage + 1;

    const button = `
      <button data-goto="" class="btn--inline pagination__btn--${type}">
        ${type === 'prev' ? iconArrowLeft : ''}
        <span>Page ${definePage}</span>
          ${
            type === 'next'
              ? `
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>
              `
              : ''
          }
      </button>
    `;

    return button;
  }
}

export default new PaginationView();
