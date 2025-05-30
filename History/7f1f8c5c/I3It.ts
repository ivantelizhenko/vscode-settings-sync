import previewView from "./previewView";
import View from "./View";

class ResultsView extends View {
  parentElement = document.querySelector(".results");
  errorMessage = "No recipes found for your query! Please try again ;)";

  generateMarkup() {
    if (Array.isArray(this.data)) {
      return this.data
        .map((bookmark) => previewView.render(bookmark, false))
        .join("");
    }
  }
}

export default new ResultsView();
