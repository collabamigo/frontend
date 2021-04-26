
import React from "react";
import NamesContainer from "../NamesContainer";
import './Ask.css'
import CARDS_P from '../CARDS_P/CARDS_P'

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
                <div className="col-4">
                    <h1 className="title is-1"> Skill Search </h1>
                    <p>
                    <input type= 'text' value = {this.state.searchTerm} onChange = {this.editSearchTerm} placeholder = 'Search for a name!'/>
                    <h3>Recent Ones</h3>
                    <NamesContainer names = {this.dynamicSearch()}/>
                    </p>
                </div>
                <CARDS_P />
            </div>
        )
    }
}


export default Ask;
