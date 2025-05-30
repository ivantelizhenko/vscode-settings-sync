const icons = require("../../img/icons.svg") as string;

interface DataObjectType {
  id: string;
  image: string;
  title: string;
  publisher: string;
  key: string;

  page: number;
  results: any[];
  resultsPerPage: number;
  query: string;
}

interface DataSearch {
  query: string;
  results: DataObjectType[];
  page: number;
  resultsPerPage: number;
}

type DataType = DataSearch | DataObjectType | DataObjectType[];

export default abstract class View {
  protected data?: unknown;

  protected abstract parentElement: HTMLElement;
  protected abstract generateMarkup(): void;
  protected errorMessage?: string;
  protected message?: string;

  /**
   * Render the received object to the DOM
   * @param {Object | Object[]} data The data to be rendered(e.g. recipe)
   * @param {boolean} [render=true] If false, create markup string instead of rendering to the DOM
   * @returns {undefined | string} A markup is returned if render = false
   * @this {Object} View instance
   * @author Jonas Schmedtmann
   * @todo Finish implementation
   */
  render(data: DataObjectType, render: boolean = true): string | void {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this.data = data;
    const markup = this.generateMarkup();

    if (!render) return markup;

    if (typeof markup === "string") {
      this.clear();
      this.parentElement.insertAdjacentHTML("afterbegin", markup);
    }
  }

  update(data: DataType) {
    this.data = data;
    const newMarkup = this.generateMarkup();
    if (typeof newMarkup === "string") {
      const newDOM = document.createRange().createContextualFragment(newMarkup);
      const newElements = Array.from(newDOM.querySelectorAll("*"));
      const curElements = Array.from(this.parentElement.querySelectorAll("*"));

      newElements.forEach((newEl, i) => {
        const curEl = curElements[i];

        // Updates changed TEXT
        if (
          !newEl.isEqualNode(curEl) &&
          newEl.firstChild?.nodeValue!.trim() !== ""
        ) {
          curEl.textContent = newEl.textContent;
        }

        // Updates changed ATTRIBUTES
        if (!newEl.isEqualNode(curEl)) {
          Array.from(newEl.attributes).forEach((attr) =>
            curEl.setAttribute(attr.name, attr.value)
          );
        }
      });
    }
  }

  private clear() {
    this.parentElement.innerHTML = "";
  }

  renderSpinner() {
    const markup = `
    <div class="spinner">
      <svg>
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div>
  `;
    this.clear();
    this.parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderError(message = this.errorMessage) {
    const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
  `;
    this.clear();
    this.parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderMessage(message = this.message) {
    const markup = `
      <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
  `;
    this.clear();
    this.parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}
