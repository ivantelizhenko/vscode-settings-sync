class SearchView {
  private parentElement = document.querySelector('.search') as HTMLFormElement;

  getQuery() {
    const inputElement = this.parentElement.querySelector(
      '.search__field'
    ) as HTMLInputElement;
  }
}

export default new SearchView();
