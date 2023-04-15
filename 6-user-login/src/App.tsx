import React, { useState } from "react";
import "./App.css";
import MainHeader from "./components/MainHeader/MainHeader";
import Home from "./components/Home/Home";

function App() {
  return (
    <React.Fragment>
      <MainHeader />{" "}
      <main>
        <Home />
      </main>
    </React.Fragment>
  );
}

export default App;
