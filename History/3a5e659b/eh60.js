import icons from 'url:../../img/icons.svg';
import View from './View.js';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

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

  _generateMarkup() {}
}

export default new PaginationView();
