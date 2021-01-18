import React from "react";

class SearchBar extends React.Component {
  state = { term: "" }; //to make controlled input tag

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    //TODO call a callback
    // from app component
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="ui field">
            <label>Video Search</label>
            <input
              onChange={this.onInputChange}
              type="text"
              value={this.state.term} //to store changes in component not in DOM
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
