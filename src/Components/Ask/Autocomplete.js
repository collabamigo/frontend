

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
      searchTerm : PropTypes.string,
  };

  static defaultProps = {
      searchTerm: "",
  };

  constructor (props) {

      super(props);
      this.state = {
          activeSuggestion: 0,
          filteredSuggestions: [],
          showSuggestions: false,
          userInput: this.props.searchTerm,
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
          userInput: e.target.value,
      });
       this.props.onChange(e.target.value);
        if (suggestions && suggestions[0].toLowerCase() === e.target.value.toLowerCase()){
            this.handleClick()
        }
  };

  handleClick = () => {
      this.setState({
          "showSuggestions": false,
      });
      this.props.onMatch(true);

  };

  /*
   * OnKeyDown = (e) => {
   *   const { activeSuggestion, filteredSuggestions } = this.state;
   *
   *   // User pressed the enter key
   *   if (e.keyCode === 13) {
   *     this.setState({
   *       activeSuggestion: 0,
   *       showSuggestions: false,
   *       userInput: filteredSuggestions[activeSuggestion]
   *     });
   *   }
   *   // User pressed the up arrow
   *   else if (e.keyCode === 38) {
   *     if (activeSuggestion === 0) {
   *       return;
   *     }
   *
   *     this.setState({ activeSuggestion: activeSuggestion - 1 });
   *   }
   *   // User pressed the down arrow
   *   else if (e.keyCode === 40) {
   *     if (activeSuggestion - 1 === filteredSuggestions.length) {
   *       return;
   *     }
   *
   *     this.setState({ activeSuggestion: activeSuggestion + 1 });
   *   }
   * };
   */

  render () {
      let suggestionsListComponent;

      if (this.state.showSuggestions && this.state.userInput) {

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
                      value={this.state.userInput}
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
