import icons from 'url:../../img/icons.svg';
import View from './View.js';

class PreviewView extends View {
  _parentElement = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new PreviewView();
