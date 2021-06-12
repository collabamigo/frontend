
import React from "react";
import PropTypes from "prop-types";
import "./Autocomplete.css";
import backend from "../../env";
import axios from "axios";

class Autocomplete extends React.Component {

    static propTypes = {
        integrated: PropTypes.bool,
        onChange: PropTypes.func.isRequired,
        onMatch:PropTypes.func.isRequired,
        version: PropTypes.number
    };

    static defaultProps = {
        integrated: false,
        version:1,
    }
    constructor (props) {
      super(props);
      this.state = {
          activeSuggestion: 0,
          suggestions: undefined,
          showSuggestions: true,
          searchTerm: "",
          cacheId: 0,
      };
    }
  
    // noinspection JSCheckFunctionSignatures
    shouldComponentUpdate () {
        return true;
    }

    handleChange = (e) => {
    this.setState({
        suggestions: undefined,
    })
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

      this.setState({
          activeSuggestion: 0,
          showSuggestions: true,
          searchTerm: e.target.value,
      });
       this.props.onChange(e.target.value);
    };

      handleClick = (e) => {
          this.setState({
              showSuggestions: false,
          });
          if (this.props.version === 1) {
              this.setState({
                  searchTerm: e.target.innerText
              })
          }
          else {
              this.setState({
                  searchTerm: ""
              })
          }
          this.props.onMatch(e.target.innerText);
      };

      handleKeyDown(e) {
        if (e.key === 'Enter' || e.key === 'Tab') {
            if (this.state.suggestions !== undefined)
                  this.handleClick({
                      target : {
                          innerText: this.state.suggestions[0]
                      }
                  })
          e.preventDefault()
        }
      }


      render () {
          let suggestionsListComponent;

          if (this.state.showSuggestions && this.state.searchTerm) {

              if (this.state.suggestions) {

                  suggestionsListComponent =
                      (
                          <ul className={"suggestions "+((!this.props.integrated)?" col-9":" col-auto")}>
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
                                  Be patient while we take your patience
                              </em>
                          </div>
                      );
              }
          }

          return (
              <div className="container-fluid">
                  <div className={"row mx-5 "+((!this.props.integrated)?"justify-content-center":null)}>

                      <input
                          className={((!this.props.integrated)?"col-9":"col-auto")}
                          onChange={this.handleChange.bind(this)}
                          onKeyDown={this.handleKeyDown.bind(this)}
                          type="text"
                          value={this.state.searchTerm}
                      />
                  </div>

                  <div className={"row mx-5 "+((!this.props.integrated)?"justify-content-center":null)}>

                      {suggestionsListComponent}
                  </div>
              </div>
          )

      }

}

export default Autocomplete;
