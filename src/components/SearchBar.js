import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div
        style={{ marginTop: "1.25rem" }}
        className="search-bar ui  pink segment "
      >
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>YouTube 影片搜尋</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
