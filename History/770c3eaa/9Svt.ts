import { PreviewView } from './previewView';
import { View } from './View';

class BookmarksView extends View {
  parentElement = document.querySelector(
    '.bookmarks__list'
  ) as HTMLUListElement;
  errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it :)';
  message = '';

  generateMarkup = () => {
    return this.data.map(this.generateMarkupPreview).join('');
  };
}

export default new BookmarksView();
