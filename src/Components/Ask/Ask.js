
import React from "react";
import './Ask.css'
import CARDS_P from './CARDS_P/CARDS_P'
import Autocomplete from "./Autocomplete";

class Ask extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            names: ['Machine Learning', 'Open Cv', 'Django', 'Python', 'Flask', 'Java', 'Languages', 'React', 'RNN', ''],
            searchTerm: ''
        }
    }

    editSearchTerm = (e) => {
        this.setState({searchTerm: e.target.value})
      }
      dynamicSearch = () => {
        return this.state.names.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
        }

    render() {
        return(
            <div >
                <div>
                  <h1 className={'col-sm-5 col-md-5'}> Skill Search </h1>
                  <Autocomplete
                    suggestions={[
                      "npm",
                      "Open Cv",
                      "Machine Learning",
                      "Python",
                      "Go",
                      "Java",
                      "SVM Machines",
                      "RNN",
                      "CNN",
                        "C++",
                        "Cyber security"
                    ]}
                  />
                </div>
                <div>
                    <CARDS_P name="Shikhar Sharma" batch="CSE, First Year" description="Did this work yet, pls inform jajajajajajajasjasjajsjasja
                    ajsjasjasjajsajsjajs"/>
                    <CARDS_P name="Aditya Pratap" batch="CSE, First Year" description="Did this work yet, pls inform" />
                </div>
            </div>
        )
    }
}

export default Ask;