class SearchView {
  #parentEl = document.querySelector('.search');

  getQuery() {
    return this.#parentEl.querySelector('.search__field').value;
  }

  addHandlerSearch(handler) {
    this.parentEl.addEventListener();
  }
}

export default new SearchView();
