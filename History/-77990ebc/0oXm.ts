import { API_URL, RES_PER_PAGE, KEY } from "./config.js";
import { AJAX } from "./helpers.js";

import "core-js/stable";
import "regenerator-runtime/runtime";

interface Recipe {
  id: string;
  title: string;
  publisher: string;
  sourceUrl: string;
  image_url: string;
  servings: number;
  cookingTime: number;
  ingredients: {
    quantity: number;
    unit: string;
    description: string;
  }[];
  key: string;
}

export const state = {
  recipe: {},
  search: {
    query: "",
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  bookmarks: [],
};

export const loadSearchResults = async function (query: string) {
  try {
    state.search.query = query;
    state.search.page = 1;
    const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`);
    state.search.results = data.data.recipes.map((rec: Recipe) => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
        ...(rec.key && { key: rec.key }),
      };
    });
  } catch (err) {
    console.error(`${err}💥`);
    throw err;
  }
};
