import { PreviewView } from './previewView';

class ResultsView extends View {
  parentElement = document.querySelector('.results') as HTMLUListElement;
  errorMessage = 'No recipes found for your query. Pleasy try again!';
  message = '';
}

export default new ResultsView();
