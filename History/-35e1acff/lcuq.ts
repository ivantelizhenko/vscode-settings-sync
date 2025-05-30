class SearchView {
  private parentElement = document.querySelector('.search') as HTMLFormElement;

  getQuery() {
    const query = this.parentElement.querySelector('.search__field').value;
  }
}

export default new SearchView();
