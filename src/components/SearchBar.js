import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import logo from "../assets/clapperboard.png";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="p-2">
        <img src={logo} alt="logo" className="w-8 absolute top-4" />
        <form
          onSubmit={this.onFormSubmit}
          className="mx-auto shadow-xl max-w-lg rounded-lg"
        >
          <div className="mx-auto px-5 py-3 rounded-xl flex justify-between items-center">
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
              placeholder="Search here"
              className="outline-none w-full"
            />
            <AiOutlineSearch
              onClick={this.onFormSubmit}
              className="cursor-pointer rounded-full h-8 w-8 p-1 bg-[#eee] hover:bg-transparent"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
