
import React from "react";
import PropTypes from "prop-types";
import "./Autocomplete.css";
import backend from "../../env";
import axios from "axios";

class Autocomplete extends React.Component {

    static propTypes = {
      onChange: PropTypes.func.isRequired,
      onMatch:PropTypes.func.isRequired,
  };

    constructor (props) {
      super(props);
      this.state = {
          activeSuggestion: 0,
          suggestions: undefined,
          showSuggestions: false,
          searchTerm: "",
          cacheId: 0,
      };
    }
  
    // noinspection JSCheckFunctionSignatures
    shouldComponentUpdate () {
        return true;
    }

      handleChange = (e) => {
            axios.get(backend+"autocomplete/",{
                params:{
                    query: e.target.value,
                    cache: this.state.cacheId,
                }
            }).then(
                (res) => {
                    this.setState({
                        suggestions: res.data["recommendations"],
                        cacheId: res.data["cache_id"]
                    }
                    )
      })
                .catch((err)=> console.log(err,"err"))

          this.setState({
              activeSuggestion: 0,
              showSuggestions: true,
              searchTerm: e.target.value,
          });
           this.props.onChange(e.target.value);
            if (this.state.suggestions && this.state.suggestions[0].toLowerCase() === e.target.value.toLowerCase()){
                this.props.onMatch(e.target.value);
            }
            else {
                this.setState({
                    showSuggestions: true
                })
            }
      };

      handleClick = (e) => {
          this.setState({
              showSuggestions: false,
          });
          this.handleChange({
              target: {
                  value: e.target.innerText
              }
          })
      };


      render () {
          console.log("rerender", this.state)
          let suggestionsListComponent;

          if (this.state.showSuggestions && this.state.searchTerm) {

              if (this.state.suggestions) {

                  suggestionsListComponent =
                      (
                          <ul className="suggestions col-sm-4 col-md-3">
                              {this.state.suggestions.map((suggestion, index) => {

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
