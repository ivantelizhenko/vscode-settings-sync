const icons = require("../../img/icons.svg") as string;

import View from "./View.js";
import previewView from "./previewView.js";

class BookmarksView extends View {
  parentElement = document.querySelector(
    ".bookmarks__list"
  ) as HTMLUListElement;
  errorMessage = "No bookmarks yet. Find a nice recipe and bookmark it ;)";

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  generateMarkup() {
    if (Array.isArray(this.data)) {
      return this.data
        .map((bookmark) => previewView.render(bookmark, false))
        .join("");
    }
  }
}

export default new BookmarksView();
