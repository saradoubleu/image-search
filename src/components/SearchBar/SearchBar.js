import React, { Component, useState } from "react";
import TextField from "@material-ui/core/TextField";

class SearchBar extends Component {
  state = { searchTerm: "" };

  onFormSubmit(event) {
    event.preventDefault();
    console.log(this.state.searchTerm);
    this.props.onSubmit(this.state.searchTerm);
  }

  render() {
    return (
      <div className="search-bar-wrapper">
        <form onSubmit={(event) => this.onFormSubmit(event)}>
          <span>
            <TextField
              id="standard-basic"
              label="Search for images"
              type="text"
              value={this.state.searchTerm}
              onChange={(e) => this.setState({ searchTerm: e.target.value })}
            ></TextField>
          </span>
        </form>
      </div>
    );
  }
}

export default SearchBar;
