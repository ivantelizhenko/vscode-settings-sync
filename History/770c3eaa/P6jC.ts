import { Data, RecipePreview } from '../utils/types';
import { PreviewView } from './previewView';

class BookmarksView extends View {
  protected declare data: Data<RecipePreview>[];

  parentElement = document.querySelector(
    '.bookmarks__list'
  ) as HTMLUListElement;
  errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it :)';
  message = '';
}

export default new BookmarksView();
