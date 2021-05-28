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
                this.setState ( {teacher: res.data[0]["IsTeacher"]})
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
        
        else
        {
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
    }
}

export default Ask;
