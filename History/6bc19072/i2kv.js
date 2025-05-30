class SearchView {
  #parentEl = document.querySelector('.search');

  getQuery() {
    return this.#parentEl.querySelector('.search__field').value;
  }

  addHandlerSearch(handler) {
    this.parentEl.add;
  }
}

export default new SearchView();
