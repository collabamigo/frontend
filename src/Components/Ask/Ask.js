
import React from "react";
import "./Ask.css";
import CardsP from "./CardsP/CardsP";
import Autocomplete from "./Autocomplete";
import axios from "axios";
import backend from "../../env";


class Ask extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            "searchTerm": "",
            "temp_l": [],
            "found_match": false,
            // "dataList": undefined,
            "tempList": [{}],
        }

        axios.get(backend+"autocomplete",{
            params:{
                query: "j"
            }
        }).then(()=>console.log("GOT")).catch((err)=> console.log(err,"err"))

    }

    // componentDidMount () {
    //
    //     this.refreshList();
    // }

    // Noinspection JSCheckFunctionSignatures
    shouldComponentUpdate () {
        return true;
    }

    handleMatch = (searchTerm) => {
        this.setState({"found_match": true});
        this.getTeacherIds(searchTerm)

    }

    handleChange = (value) => {
        this.setState({"searchTerm": value});
    }

    getTeacherIds = (searchTerm) => {
        axios.get(backend+"connect/teacheridfor/"+ searchTerm ,{
        params: {
            format: "json",
        }
          })
            .then((res) => {
                // this.setState({"dataList": res.data})
                axios.get(backend+"connect/teachersdata/",{
                    // format: "json",
                     params:{
                         id_list: JSON.stringify(res.data)
                     }
                })
                    .then((response) => this.setState({"tempList": response.data}))
                    .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
    };

      render () {
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
                              onMatch={this.handleMatch}
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

                          {/* TODO: Remove function duplication*/}

                          <Autocomplete
                              onChange={this.handleChange}
                              onMatch={this.handleMatch}
                              searchTerm={this.state.searchTerm}
                              suggestions={this.state.temp_l}
                          />
                      </div>

                      <div>
                          {this.state.tempList.map(item => (
                              <div
                                  className="row-auto"
                                  key={item.id}
                              >
                                  <CardsP
                                      batch={item.Course}
                                      description="My Tech Stack is "
                                      insta={"https://www.instagram.com/"+ item.Handle}
                                      name={item.First_Name + " " + item.Last_Name}
                                  />
                              </div>
                          ))}
                      </div>
                  </div>
            );
          }
      }
}

export default Ask;
