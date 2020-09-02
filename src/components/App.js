import React, { Component, useEffect } from "react";
import { SearchBar } from "./SearchBar/SearchBar";
import axios from "../api/shutterstock";

function App() {
  useEffect(() => {
    async function fetchImages() {
      const request = await axios.get("/v2/images/search?query=pig");
      console.log("**** ", request);
    }
    fetchImages();
  }, []);

  return (
    <div>
      TEST
      <SearchBar />
    </div>
  );
}
export default App;
