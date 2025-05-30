import { PreviewView } from './previewView';

class BookmarksView extends PreviewView {
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
