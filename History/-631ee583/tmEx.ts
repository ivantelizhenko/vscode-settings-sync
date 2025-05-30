export interface State {
  recipe: Partial<Recipe>;
  search: SearchData;
  bookmarks: RecipePreview[];
}

export interface SearchData {
  query: string;
  results: RecipePreview[];
  page: number;
  resultsPerPage: number;
}

export type Data<T extends object> = T;

export interface Recipe {
  id: string;
  title: string;
  publisher: string;
  sourceUrl: string;
  image: string;
  servings: number;
  cookingTime: number;
  ingredients: Ingredient[];
  bookmarked: boolean;
}

export interface Ingredient {
  description: string;
  quantity: number;
  unit: string;
}

export interface SearchResultsFromAPI {
  id: string;
  title: string;
  publisher: string;
  image_url: string;
}

export interface RecipePreview {
  id: string;
  title: string;
  publisher: string;
  image: string;
}

export interface Addrecipe {
  cookingTime: string;
  image: string;
  ingredient1: '0.5,kg,Rice';
  ingredient2: '1,,Avocado';
  ingredient3: ',,salt';
  ingredient4: '';
  ingredient5: '';
  ingredient6: '';
  publisher: 'TEST23';
  servings: '23';
  sourceUrl: 'TEST23';
  title: 'TEST23';
}

export type PosibleRenderData = Recipe | RecipePreview[] | SearchData;
