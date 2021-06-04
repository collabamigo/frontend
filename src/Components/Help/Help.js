import React from "react";
import "./Help.css";
import DashBoard from "./DashBoard/DashBoard";
import backend from "../../env";
import axios from "axios";
import HelpForm from "./HelpForm/HelpForm";

// eslint-disable-next-line react/require-optimization
class Ask extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            "teacher": "",
            "skills":[],
            "name":"",
            "linkedin":"",
            "git":"",
            "upvote":0,
            "downvote":0,
        };
    }


    componentDidMount() {
        axios.get(backend + "connect/teacher/", {
            params: {
                format: "json",
            }
        })
            .then((res) => {
                this.setState({teacher: Boolean(res.data.length),
                skills:res.data.length?res.data[0]["skills"]:[]})
            })

        axios.get(backend+"connect/profile?format=json")
            .then(res => {
                this.setState({name:res.data.length ? res.data[0]["First_Name"]:[],
                linkedin:res.data.length ? res.data[0]["Linkedin"]:[],
                git:res.data.length ? res.data[0]["Gitname"]:[],
                upvote:res.data.length ? res.data[0]["UpVotes"]:[],
                downvote:res.data.length ? res.data[0]["DownVotes"]:[]});
            })
    }

    shouldComponentUpdate() {
        return true;
    }

    handlerSubmit() {
        this.setState({
            teacher: true
        })
    }

    render() {
        if (this.state.teacher) {
            return (
                <DashBoard
                    downvote={this.state.downvote}
                    git={this.state.git}
                    linkedin={this.state.linkedin}
                    name={this.state.name}
                    skills={this.state.skills}
                    upvote={this.state.upvote}

                />
            );

        }

        else if (this.state.teacher === false) {
            return (
                <div>
                    <HelpForm
                        handleSubmit={this.handlerSubmit.bind(this)}
                    />
                </div>
            )
        }
        else {
            return(
                <div>
                    <div
                        className="spinner-border"
                        role="status"
                    >
                        <span className="sr-only">
                            Loading...
                        </span>
                    </div>
                </div>
                )

        }
    }
}

export default Ask;
