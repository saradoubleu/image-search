import React, { Component, useState } from "react";
import axios from "../../api/shutterstock";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

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
          {/* <span>
            <FormControl variant="outlined">
              <InputLabel id="demo-simple-select-outlined-label">
                Age
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value="test"
                // onChange={handleChange}
                label="Category"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </span> */}
          <span>
            <Button
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
