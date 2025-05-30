import icons from 'url:../../img/icons.svg';
import View from './View.js';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return this._generateMarkupButton('next');
    }

    // Last page
    if (curPage === numPages) {
      return this._generateMarkupButton('prev');
    }

    //Other page
    if (curPage < numPages) {
      return this._generateMarkupButton('both');
    }

    // Page 1, and there aere NO other pages
    return this._generateMarkupButton();
  }

  _generateMarkupButton(direction) {
    let lastWord = '';
    if (direction === 'prev' || direction === 'both') {
      lastWord += `
        <button data-goto="${
          this._data.page - 1
        }" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${this._data.page - 1}</span>
        </button>
      `;
    }
    if (direction === 'next' || direction === 'both') {
      lastWord += `
        <button data-goto="${
          this._data.page + 1
        }"  class="btn--inline pagination__btn--next">
          <span>Page ${this._data.page + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>
      `;
    }
    return lastWord;
  }
}

export default new PaginationView();
