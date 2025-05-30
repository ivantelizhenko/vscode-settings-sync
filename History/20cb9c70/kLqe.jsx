import React from "react";

import CharacterEditor from "./components/CharacterEditor";
import Footer from "./components/Footer";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <CharacterEditor />
      <Footer />
      <div className={styles.grayBox}></div>
    </>
  );
}

export default App;
