import icons from 'url:../../img/icons.svg';
import View from './View.js';

class PreviewView extends View {
  _parentElement = '';

  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new PreviewView();
