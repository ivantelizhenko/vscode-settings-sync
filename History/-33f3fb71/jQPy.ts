interface State {
  recipe: object;
  search: {
    query: string;
    results: object[];
    page: number;
    resultsPerPage: number;
  };
  bookmarks: [];
}
