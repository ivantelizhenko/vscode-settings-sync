import previewView from "./previewView";
import View from "./View";

class ResultsView extends View {
  parentElement = document.querySelector(".results");
  errorMessage = "No recipes found for your query! Please try again ;)";

  generateMarkup() {
    return this.data
      .map((bookmark) => previewView.render(bookmark, false))
      .join("");
  }
}

export default new ResultsView();
