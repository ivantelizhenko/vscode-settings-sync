class SearchView {
  private parentElement = document.querySelector('.search') as HTMLElement;

  getQuery() {
    return this.parentElement.closest('.search__field').value;
  }
}

export default new SearchView();
