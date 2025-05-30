class SearchView {
  private parentElement = document.querySelector(".search") as HTMLFormElement;
  private searchInput = this.parentElement.querySelector(
    ".search__field"
  ) as HTMLInputElement;

  public getQuery() {
    const query = this.searchInput.value;

    this.clearInput();
    return query;
  }

  private clearInput() {
    this.searchInput.value = "";
  }

  public addHandlerSearch(handler: Function) {
    this.parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
