class SearchView {
  private parentElement = document.querySelector('.search') as HTMLFormElement;

  getQuery() {
    return (
      this.parentElement.querySelector('.search__field') as HTMLInputElement
    ).value;
  }

  addHandlerRender(handler: Function): void {
    //FIXME: Check this function in function. Workds, but looks weird
    this.parentElement.addEventListener('submit', () => handler());
  }
}

export default new SearchView();
