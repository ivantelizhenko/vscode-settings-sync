import React from "react";

import CharacterEditor from "./components/CharacterEditor";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <CharacterEditor />
      <Footer />
      <div class={styles.grayBox}></div>
    </>
  );
}

export default App;
