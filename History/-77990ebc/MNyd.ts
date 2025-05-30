import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { Recipe } from './types';

export interface State {
  recipe: Recipe;
}

const state: Partial<State> = {
  recipe: {},
};

export async function loadReipe(id: string) {
  const res = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
  );
  const data = await res.json();

  if (!res.ok) throw new Error(`${data.message} (${res.status})`);

  const recipeFromAPI = data.data.recipe;
  const recipe: Recipe = {
    id: recipeFromAPI.id,
    title: recipeFromAPI.title,
    publisher: recipeFromAPI.publisher,
    sourceUrl: recipeFromAPI.source_url,
    image: recipeFromAPI.image_url,
    servings: recipeFromAPI.servings,
    cookingTime: recipeFromAPI.cooking_time,
    ingredients: recipeFromAPI.ingredients,
  };
  state.recipe = recipe;
}
