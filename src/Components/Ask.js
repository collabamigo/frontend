
import React from "react";
import NamesContainer from "./NamesContainer";
import Collab from "./Collab";

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
            <div>
                {/*<Collab className="jumbotron" title = "Collab Connect" userName={label} />*/}
                <h1 className="title is-1"> Search Here </h1>
                <p>
                    <input type= 'text' value = {this.state.searchTerm} onChange = {this.editSearchTerm} placeholder = 'Search for a name!'/>
                    <h3>Recent Ones</h3>
                    <NamesContainer names = {this.dynamicSearch()}/>
                </p>
            </div>)
    }
}


export default Ask;
