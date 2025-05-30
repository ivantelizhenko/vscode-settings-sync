import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { Recipe } from './types';

export interface State {
  recipe: Partial<Recipe>;
}

const state: State = {
  recipe: {},
};

export async function loadRecipe(id: string) {
  try {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    const recipe = data.data.recipe;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
  } catch (err) {
    console.error((err as Error).message);
  }
}
