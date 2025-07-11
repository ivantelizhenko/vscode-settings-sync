import { API_URL, RES_PER_PAGE, KEY } from "./config.js";
import { AJAX } from "./helpers.js";

import "core-js/stable";
import "regenerator-runtime/runtime";

// {
//   "recipe": {
//     "publisher": "My Baking Addiction",
//     "ingredients": [
//       {
//         "quantity": 1,
//         "unit": "",
//         "description": "tbsp. canola or olive oil"
//       },
//       {
//         "quantity": 0.5,
//         "unit": "cup",
//         "description": "chopped sweet onion"
//       },
//       {
//         "quantity": 3,
//         "unit": "cups",
//         "description": "diced fresh red yellow and green bell peppers"
//       },
//       {
//         "quantity": 1,
//         "unit": "",
//         "description": "tube refrigerated pizza dough"
//       },
//       {
//         "quantity": 0.5,
//         "unit": "cup",
//         "description": "salsa"
//       },
//       {
//         "quantity": 2,
//         "unit": "cups",
//         "description": "sargento chefstyle shredded pepper jack cheese"
//       },
//       {
//         "quantity": null,
//         "unit": "",
//         "description": "Chopped cilantro or dried oregano"
//       }
//     ],
//     "source_url": "http://www.mybakingaddiction.com/spicy-chicken-and-pepper-jack-pizza-recipe/",
//     "image_url": "http://forkify-api.herokuapp.com/images/FlatBread21of1a180.jpg",
//     "title": "Spicy Chicken and Pepper Jack Pizza",
//     "servings": 4,
//     "cooking_time": 45,
//     "id": "5ed6604591c37cdc054bc886"
//   }

interface Recipe {
  id: string;
  title: string;
  publisher: string;
  sourceUrl: string;
  image: string;
  servings: number;
  cookingTime: number;
  ingredients: recipe.ingredients;
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
    state.search.results = data.data.recipes.map((rec) => {
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
