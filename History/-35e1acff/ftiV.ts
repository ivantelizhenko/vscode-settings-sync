class SearchView {
  private parentElement = document.querySelector('.search') as HTMLFormElement;

  getQuery() {
    const inputElement = this.parentElement.querySelector(
      '.search__field'
    ) as HTMLInputElement;
    return inputElement.value;
  }
}

export default new SearchView();
