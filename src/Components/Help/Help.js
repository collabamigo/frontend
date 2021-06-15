import React from "react";
import "./Help.css";
import DashBoard from "./DashBoard/DashBoard";
import backend from "../../env";
import axios from "axios";
import HelpForm from "./HelpForm/HelpForm";
import Loading from "../../common/Loading";

function removeItemAll(arr, value) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] === value) {
      arr.splice(i, 1);
    } else {
      ++i;
    }
  }
  return arr;
}

class Help extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isTeacher: false,
            loading:true,
            skills:[],
            name:"",
            linkedin:"",
            git:"",
            upvote:0,
            downvote:0,
            created:[],
            id:"",
            help_history:[],
            image:'',
        };
    }


    componentDidMount() {

        axios.get(backend+"connect/teacher?format=json")
            .then(res => {
                if (res.data.length)
                        this.handlerSubmit(res)
                else 
                    this.setState({
                        loading: false
                    })
            })
    }

    shouldComponentUpdate() {
        return true;
    }

    handlerSubmit(res) {
        this.setState({
            isTeacher: Boolean(res.data.length),
            loading: false,
            name:localStorage.getItem("userName"),
            linkedin: res.data[0]["Linkedin"],
            git:res.data[0]["Gitname"],
            upvote:res.data[0]["UpVotes"],
            downvote:res.data[0]["DownVotes"],
            skills:res.data[0]['skills'],
            created:res.data[0]['Created'].split('T')[0],
            id:res.data[0]['id'],
            help_history:res.data[0]['help_history'],
            image:res.data[0]['image']})
    }

    handleSkillDelete(item) {
        const payload = {
            skills: removeItemAll(this.state.skills, item)
        }
        axios.patch(backend+"connect/teacher/"+this.state.id+"/" ,payload)
            .then(() => this.setState(payload))
    }
    
    handleSkillCreate() {
        const payload = {
            skills: this.state.skills
        }
        axios.patch(backend+"connect/teacher/"+this.state.id+"/" ,payload)
            .then(() => this.setState(payload))
    }
    
    render() {
        if (this.state.loading)
            return <Loading />

        else if (this.state.isTeacher) {
            return (
                <DashBoard
                    created={this.state.created}
                    downvote={this.state.downvote}
                    git={this.state.git}
                    help_history={this.state.help_history}
                    image={this.state.image}
                    linkedin={this.state.linkedin}
                    name={this.state.name}
                    onCreate={this.handleSkillCreate.bind(this)}
                    onDelete={this.handleSkillDelete.bind(this)}
                    setSkills={(skills) => this.setState({
                        skills: skills,
                    })}
                    skills={this.state.skills}
                    upvote={this.state.upvote}
                />
            );
        }

        else
            return (
                <div>
                    <HelpForm
                        handleSubmit={this.handlerSubmit.bind(this)}
                    />
                </div>
            )
        }
}

export default Help;
