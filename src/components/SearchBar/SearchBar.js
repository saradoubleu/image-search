import React, { Component, useState } from "react";
import axios from "../../api/shutterstock";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import SearchCategory from "../SearchCategory/SearchCategory";
import "./SearchBar.css";

class SearchBar extends Component {
  state = {
    searchTerm: "",
    categories: [],
  };

  async getCategories() {
    const request = await axios.get("/v2/images/categories", {});
    this.setState({ categories: request });
    // console.log("YOOO: ", this.state.categories.data);
  }

  componentDidMount() {
    this.getCategories();
  }

  onFormSubmit(event) {
    event.preventDefault();
    // console.log(this.state.searchTerm);
    this.props.onSubmit(this.state.searchTerm);
  }

  render() {
    return (
      <div className="search-bar-wrapper">
        <form onSubmit={(event) => this.onFormSubmit(event)}>
          <span>
            <TextField
              id="outlined-basic"
              variant="outlined"
              className="search-input"
              label="Search for images"
              type="text"
              value={this.state.searchTerm}
              onChange={(e) => this.setState({ searchTerm: e.target.value })}
            ></TextField>
          </span>
          {/* <span>
            <SearchCategory category={this.state.categories} />
          </span> */}
          <span>
            <Button
              className="submit-button"
              variant="contained"
              color="primary"
              onClick={(event) => this.onFormSubmit(event)}
            >
              Search
            </Button>
          </span>
        </form>
      </div>
    );
  }
}

export default SearchBar;
