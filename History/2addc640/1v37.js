import icons from 'url:../../img/icons.svg';
import View from './View.js';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPages);

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      console.log(this._generateMarkupButton('next'));
    }

    // Last page
    if (curPage === numPages) {
      console.log(this._generateMarkupButton('prev'));
    }

    //Other page
    if (curPage < numPages) {
      console.log(this._generateMarkupButton('both'));
    }

    // Page 1, and there aere NO other pages
    console.log(this._generateMarkupButton());
  }

  _generateMarkupButton(direction) {
    let lastWord = '';
    if (direction === 'prev' || direction === 'both') {
      lastWord += `
        <button class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${curPage - 1}</span>
        </button>
      `;
    }
    if (direction === 'next' || direction === 'both') {
      lastWord += `
        <button class="btn--inline pagination__btn--next">
          <span>Page ${curPage + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>
      `;
    }
    console.log(lastWord);
  }
}

export default new PaginationView();
