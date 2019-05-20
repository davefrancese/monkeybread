import React from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Dave Francese</h1>
      <main>
        <Intro />
      </main>
    </div>
  );
}

export default App;
