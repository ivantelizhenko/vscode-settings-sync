interface State {
  recipe: object;
  search: {
    query: string;
    results: any[];
    page: number;
    resultsPerPage: number;
  };
  bookmarks: any[];
}
