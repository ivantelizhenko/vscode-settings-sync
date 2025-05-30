import { Data, RecipePreview } from '../utils/types';

class ResultsView extends PreviewView {
  protected declare data: Data<RecipePreview>[];
  parentElement = document.querySelector('.results') as HTMLUListElement;
  errorMessage = 'No recipes found for your query. Pleasy try again!';
  message = '';

  declare render: (data: RecipePreview[]) => void;

  generateMarkup = () => {
    return this.data.map().join('');
  };
}

export default new ResultsView();
