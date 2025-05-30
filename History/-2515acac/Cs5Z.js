import View from './View.js';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'We could not find recipes. Please try another one!';
  _message = '';

  _generateMarkup() {
    return ``;
  }
}

export default new ResultsView();
