
import React from "react";
import './Ask.css'
import CARDS_P from './CARDS_P/CARDS_P'
import Autocomplete from "./Autocomplete";
import a from "../../temp"

function generate(val){
    return a[val]
}
class Ask extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            searchTerm: '',
            temp_l:[],
            found_match: false
        }
    }
    onEnter = () => {
        this.setState({found_match:true});
    }

    editSearchTerm = (value) => {
        this.setState({searchTerm: value})
        const temp = generate(value)
        this.setState({temp_l:temp,
        found_match: false})
        if (temp && temp[0] === value){
            this.onEnter()
        }
      }

      dynamicSearch = () => {
        return this.state.names.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
        }

    render() {
        console.log(this.props.searchTerm)
        if (!this.state.found_match){
            return(
                <div >
                    <div>
                      <h1 className={'col-sm-5 col-md-5'}> Skill Search </h1>
                      <Autocomplete
                         suggestions={this.state.temp_l}
                         onChange={this.editSearchTerm}
                      />
                    </div>
                    <div className="float-centre">
                        Loading...
                    </div>
                </div>
            )
        }

        else{
            return(
            <div>
                <div>
                  <h1 className={'col-sm-5 col-md-5'}> Skill Search </h1>
                    <Autocomplete
                         suggestions={this.state.temp_l}
                         onChange={this.editSearchTerm}
                      />
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
}

export default Ask;