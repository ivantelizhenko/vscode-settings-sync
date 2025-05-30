class SearchView {
  private parentElement = document.querySelector('.search') as HTMLFormElement;

  getQuery() {
    const inputElement = this.parentElement.querySelector(
      '.search__field'
    ) as HTMLInputElement;
    const query = inputElement.value;
    return query;
  }
}

export default new SearchView();
