import { Data, RecipePreview } from '../utils/types';

class ResultsView extends PreviewView {
  parentElement = document.querySelector('.results') as HTMLUListElement;
  errorMessage = 'No recipes found for your query. Pleasy try again!';
  message = '';
}

export default new ResultsView();
