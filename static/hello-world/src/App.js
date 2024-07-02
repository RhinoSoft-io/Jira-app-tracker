import { router } from "@forge/bridge";

import React from "react";
import "./App.js";

function App() {
  const openWindow = async () => {
    const route = await router.open(
      "https://developer.atlassian.com/platform/forge/remote/"
    );
    console.log(route);
  };

  return (
    <header className="App-header">
      <button onClick={openWindow}>Open Window</button>
    </header>
  );
}

export default App;
