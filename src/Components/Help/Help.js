import React from "react";
import "./Help.css";
import DashBoard from "./DashBoard/DashBoard";
import backend from "../../env";
import axios from "axios";
import HelpForm from "./HelpForm/HelpForm";

// eslint-disable-next-line react/require-optimization
class Ask extends React.Component {
    
    constructor (props) {
        super(props);
        this.state = {
            "teacher" : ""
        };
    }


    componentDidMount() {
        axios.get(backend+"connect/api/teacher/", {
            params:{
                format:"json",
            }
        })
            .then((res) => {
                this.setState ( {teacher: Boolean(res.data.length)})
            })
    }

    shouldComponentUpdate () {
        return true;
    }

    render () {
        if (this.state.teacher) {

            return (
                <DashBoard />
            );

        }
        
        else if (this.state.teacher === false){
            return (
                <div>
                    <h3>
                        Hey ! We see you are eager to help others !
                    </h3>

                    <p>
                        In order to help others Please register with us
                    </p>

                    <HelpForm />
                </div>
           );

        }
        else{
            return (
                <div>
                    <div 
                        className="spinner-border spinner-border-sm"
                        role="status"
                    >
                        <span className="sr-only">
                            Loading...
                        </span>
                    </div>
    
                    <div
                        className="spinner-grow spinner-grow-sm"
                        role="status"
                    >
                        <span 
                            className="sr-only"
                        >
                            Loading...
                        </span>
                    </div>
                </div>
            )
        }
    }
}

export default Ask;
