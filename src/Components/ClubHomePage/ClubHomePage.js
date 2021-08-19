import React, { Component } from 'react';
// import axios from "axios";
// import backend from "../../env";
import PropTypes from "prop-types";
class ClubHomePage extends Component {
    static propTypes = {
        clubName : PropTypes.string.isRequired,
    }

    constructor(props) {
        super(props)

        this.state={
            basicInformation : {
                Name: "Demo Club",
                logoLink: "https://via.placeholder.com/100X100",
                tagline: "bleh bleh bleh",
                description: "bleh bleh bleh * 2",
                socialmediaLink: {
                    instagram : "https://www.instagram.com/heemank_v",
                    linkedin : "https://www.linkedin.com/heemank_v",
                    facebook : "https://www.facebook.com/heemank_v",
                    website : "https://www.collabconnect.com/404",
                },
                joinDate:"26122020",
                clubBanners:["https://via.placeholder.com/1280X480","https://via.placeholder.com/1280X480","https://via.placeholder.com/1280X480"]
            }
        }


    }

    componentDidMount() {
        console.log(this.props.clubName)
        // axios.get(backend+"/club/" + this.props.clubName)
        //     .then((res) => {
        //         console.log("axios call executed")
        //         console.log(res)
        //         }
        //     )
        }

    shouldComponentUpdate () {
        return true;
    }

    render(){
        console.log(this.state.basicInformation)
        console.log(this.props.clubName)


        return (
            <div>
                hello
            </div>

        );
    }
}

export default ClubHomePage;