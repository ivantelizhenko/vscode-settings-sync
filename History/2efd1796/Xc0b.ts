class SearchView {
  private parentElement = document.querySelector(".search") as HTMLFormElement;
  private searchInput = this.parentElement.querySelector(
    ".search__field"
  ) as HTMLInputElement;

  getQuery() {
    const query = this.searchInput.value;

    this._clearInput();
    return query;
  }

  _clearInput() {
    this.parentElement.querySelector(".search__field").value = "";
  }

  addHandlerSearch(handler) {
    this.parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
