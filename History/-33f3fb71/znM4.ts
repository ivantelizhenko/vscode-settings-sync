export { RES_PER_PAGE } from "../config";

interface State {
  recipe: object;
  search: {
    query: string;
    results: object[];
    page: number;
    resultsPerPage: RES_PER_PAGE;
  };
  bookmarks: [];
}
