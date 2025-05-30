import icons from 'url:../../img/icons.svg';
import View from './View.js';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkupButton(direction1, direction2) {
    if (String(direction1) === 'left') {
      return `
      <button class="btn--inline pagination__btn--next">
        <span>Page ${curPage + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>
    `;
    }

    if (String(direction2) === 'right') {
      return `
    <button class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${curPage - 1}</span>
    </button>`;
    }
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPages);

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) _generateMarkupButton();

    // Last page
    if (curPage === numPages) _generateMarkupButton();

    //Other page
    if (curPage < numPages) _generateMarkupButton();

    // Page 1, and there aere NO other pages
    return '';
  }
}

export default new PaginationView();
