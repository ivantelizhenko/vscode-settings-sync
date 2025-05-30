import icons from "url:../../img/icons.svg";
import View from "./View.js";
import previewView from "./previewView.js";

class ResultsView extends View {
  private parentElement = document.querySelector(".results");
  private errorMessage = "No recipes found for your query! Please try again ;)";
  private message = "";

  private generateMarkup() {
    return this.data
      .map((bookmark) => previewView.render(bookmark, false))
      .join("");
  }
}

export default new ResultsView();
