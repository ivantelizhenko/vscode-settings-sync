class SearchView {
  _parentElement = document.querySelector(".search") as HTMLFormElement;

  getQuery() {
    const searchInput =
      this._parentElement.querySelector(".search__field").value;
    const query = searchInput.value;

    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentElement.querySelector(".search__field").value = "";
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
