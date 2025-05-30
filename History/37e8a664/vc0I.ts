const icons = require("../../img/icons.svg") as string;

import View from "./View.js";

class PaginationView extends View {
  parentElement = document.querySelector(".pagination") as HTMLElement;

  addHandlerClick(handler: Function) {
    this.parentElement.addEventListener("click", function (e: MouseEvent) {
      const btn = e.target.closest(".btn--inline") as HTMLButtonElement;

      if (!btn) return;

      const goToPage = btn.dataset.goto;

      if (goToPage) {
        handler(+goToPage);
      }
    });
  }

  generateMarkup() {
    if (this.data && !Array.isArray(this.data)) {
      const curPage = this.data.page;
      const numPages = Math.ceil(
        this.data.results.length / this.data.resultsPerPage
      );

      // Page 1, and there are other pages
      if (curPage === 1 && numPages > 1) {
        return this._generateMarkupButton("next");
      }

      // Last page
      if (curPage === numPages) {
        return this._generateMarkupButton("prev");
      }

      //Other page
      if (curPage < numPages) {
        return this._generateMarkupButton("both");
      }

      // Page 1, and there aere NO other pages
      return this._generateMarkupButton();
    }
  }

  _generateMarkupButton(direction) {
    let lastWord = "";
    if (direction === "prev" || direction === "both") {
      lastWord += `
        <button data-goto="${
          this.data.page - 1
        }" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${this.data.page - 1}</span>
          </button>
          `;
    }
    if (direction === "next" || direction === "both") {
      lastWord += `
          <button data-goto="${
            this.data.page + 1
          }"  class="btn--inline pagination__btn--next">
            <span>Page ${this.data.page + 1}</span>
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
