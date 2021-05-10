
import React from "react";
import "./Ask.css";
import CardsP from "./CardsP/CardsP";
import Autocomplete from "./Autocomplete";
import a from "../../temp";
import axios from "axios";
import PropTypes from "prop-types";

function generate (val) {

    return a[val];

}
class Ask extends React.Component {

    static propTypes = {
      searchTerm : PropTypes.string,
    };

    static defaultProps = {
      searchTerm : "",
    };

    constructor (props) {

        super(props);
        this.state = {
            "searchTerm": "java",
            "temp_l": [],
            "found_match": false,
            "dataList": undefined,
        };
        axios.get("https://blooming-peak-53825.herokuapp.com/autocomplete",{
            params:{
                query: "j"
            }
        }).then(()=>console.log("GOT")).catch((err)=> console.log(err,"err"))

    }

    componentDidMount () {

        this.refreshList();
    }

    // Noinspection JSCheckFunctionSignatures
    shouldComponentUpdate () {

        return true;

    }

    onEnter = () => {

        this.setState({"found_match": true});

    }

    handleChange = (value) => {

        this.setState({"searchTerm": value});
        const temp = generate(value);
        this.setState({"temp_l": temp,
            "found_match": false});
        if (temp && temp[0] === value) {

            this.onEnter();

        }

    }

      refreshList = () => {
          axios.
              get("https://blooming-peak-53825.herokuapp.com/connect/api/todo/").
              then((res) => this.setState({"dataList": res.data})).
              catch((err) => console.log(err));

      };


      /*
       * DynamicSearch = () => {
       *   return this.state.names.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
       *   }
       */

      render () {

          console.log(this.props.searchTerm);
          if (!this.state.found_match) {

              return (
                  <div >
                      <div>
                          <h1 className="col-sm-5 col-md-5">
                              {" "}
                              Skill Search

                              {" "}
                          </h1>

                          <Autocomplete
                              onChange={this.handleChange}
                              searchTerm={this.state.searchTerm}
                              suggestions={this.state.temp_l}
                          />
                      </div>

                      <div className="float-centre">
                          Loading...
                      </div>
                  </div>
              );

          }
          else{
              return (
                  <div>
                      <div>
                          <h1 className="col-sm-5 col-md-5">
                              {" "}
                              Skill Search

                              {" "}
                          </h1>

                          <Autocomplete
                              onChange={this.handleChange}
                              searchTerm={this.state.searchTerm}
                              suggestions={this.state.temp_l}
                          />
                      </div>

                      <div>
                          <CardsP
                              batch="CSE, First Year"
                              description={`${this.state.dataList[0].description}  dont mess with me`}
                              name={this.state.dataList[0].title}
                          />

                          <CardsP
                              batch="CSE, First Year"
                              description="Did this work yet, pls inform"
                              name="Aditya Pratap"
                          />
                      </div>
                  </div>
            );
          }
      }
}

export default Ask;
