import React from "react";
import "./Help.css";
import DashBoard from "./DashBoard/DashBoard";
import backend from "../../env";
import axios from "axios";
import HelpForm from "./HelpForm/HelpForm";

// eslint-disable-next-line react/require-optimization
class Help extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            "isTeacher": "",
            "loading":true,
            "skills":[],
            "name":"",
            "linkedin":"",
            "git":"",
            "upvote":0,
            "downvote":0,
            "created":[],
        };
    }


    componentDidMount() {
        // axios.get(backend + "connect/teacher/", {
        //     params: {
        //         format: "json",
        //     }
        // })
        //     .then((res) => {
        //         this.setState({teacher: Boolean(res.data.length),
        //         skills:res.data.length?res.data[0]["skills"]:[]})
        //     })

        axios.get(backend+"connect/teacher?format=json")
            .then(res => {
                if (res.data.length)
                        this.setState({
                            isTeacher: Boolean(res.data.length),
                            loading: false,
                            name:localStorage.getItem("userName"),
                            linkedin: res.data[0]["Linkedin"],
                            git:res.data[0]["Gitname"],
                            upvote:res.data[0]["UpVotes"],
                            downvote:res.data[0]["DownVotes"],
                            skills:res.data[0]['skills'],
                            created:res.data[0]['Created'].split('T')[0]});
            })
    }

    shouldComponentUpdate() {
        return true;
    }

    handlerSubmit() {
        this.setState({
            isTeacher: true
        })
    }

    render() {
        if (this.state.loading){
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

        else if (this.state.isTeacher) {
            return (
                <DashBoard
                    created={this.state.created}
                    downvote={this.state.downvote}
                    git={this.state.git}
                    linkedin={this.state.linkedin}
                    name={this.state.name}
                    skills={this.state.skills}
                    upvote={this.state.upvote}
                />
            );
        }

        else if (!this.state.isTeacher) {
            return (
                <div>
                    <HelpForm
                        handleSubmit={this.handlerSubmit.bind(this)}
                    />
                </div>
            )
        }
    }
}

export default Help;