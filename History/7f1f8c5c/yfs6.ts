class ResultsView extends View {
  parentElement = document.querySelector(".results");
  errorMessage = "No recipes found for your query! Please try again ;)";

  private generateMarkup() {
    return this._data
      .map((bookmark) => previewView.render(bookmark, false))
      .join("");
  }
}

export default new ResultsView();
