import React, { Component } from "react";
import SearchBar from "./SearchBar/SearchBar";
import axios from "../api/shutterstock";
import SearchResults from "./SearchResults/SearchResults";
import "./App.css";

export default class App extends Component {
  state = { images: [] };

  onSearchSubmit = async (searchTerm) => {
    const request = await axios.get("/v2/images/search", {
      params: {
        query: searchTerm,
      },
    });

    this.setState({ images: request.data });
  };

  render() {
    return (
      <div>
        <h1>Image Discovery</h1>
        <div>
          <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
        <div className="search-container">
          <SearchResults images={this.state.images} />
        </div>
      </div>
    );
  }
}
