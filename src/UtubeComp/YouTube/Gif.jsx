import React from "react";
import { render } from "react-dom";

import GifSearch from "react-gif-search";

const App = () => (
  <GifSearch
    // Feed a search term directly to the API on update
    query="doggo"
    // A callback for when a search is actually made
    onDidSearch={term => console.log(`Searching for ${term}.`)}
  />
);

render(<App />, document.getElementById("root"));