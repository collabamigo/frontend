

import React from "react";
import PropTypes from "prop-types";
import "./Autocomplete.css";
import a from "../../temp";
function generate (val) {
    return a[val];
}

class Autocomplete extends React.Component {

  static propTypes = {
      onChange: PropTypes.func.isRequired,
      onMatch:PropTypes.func.isRequired,
  };

  constructor (props) {

      super(props);
      this.state = {
          activeSuggestion: 0,
          filteredSuggestions: [],
          showSuggestions: false,
          searchTerm: "",
      };
  }
  
    // noinspection JSCheckFunctionSignatures
    shouldComponentUpdate () {
        return true;
    }

  handleChange = (e) => {
      const suggestions = generate(e.target.value);
      this.setState({
          activeSuggestion: 0,
          filteredSuggestions: suggestions,
          showSuggestions: true,
          searchTerm: e.target.value,
      });
       this.props.onChange(e.target.value);
        if (suggestions && suggestions[0].toLowerCase() === e.target.value.toLowerCase()){
            this.handleClick({
                target: {
                    innerText: e.target.value
                }
            })
        }
  };

  handleClick = (e) => {
      this.setState({
          "showSuggestions": false,
          searchTerm: e.target.innerText
      });
      this.props.onMatch(e.target.innerText);
  };


  render () {
      let suggestionsListComponent;

      if (this.state.showSuggestions && this.state.searchTerm) {

          if (this.state.filteredSuggestions) {

              suggestionsListComponent =
                  (
                      <ul className="suggestions col-sm-4 col-md-3">
                          {this.state.filteredSuggestions.map((suggestion, index) => {

                  let className;

                  if (index === this.state.activeSuggestion) {

                      className = "suggestion-active";
                  }
                  return (
                      <li
                          className={className}
                          key={suggestion}
                          onClick={this.handleClick}
                      >
                          {suggestion}
                      </li>
                  );
              })}
                      </ul>);

          } else {

              suggestionsListComponent =
                  (
                      <div className="no-suggestions">
                          <em>
                              No suggestions, you are on your own!
                          </em>
                      </div>
                  );
          }
      }

      return (
          <>
              <div className="row">
                  <div className="col-sm-1 col-md-1" />

                  <input
                      className="col-sm-4 col-md-3"
                      onChange={this.handleChange.bind(this)}
                      type="text"
                      value={this.state.searchTerm}
                  />
              </div>

              <div className="row">
                  <div className="col-sm-1 col-md-1" />

                  {suggestionsListComponent}
              </div>
          </>
      );

  }

}

export default Autocomplete;
