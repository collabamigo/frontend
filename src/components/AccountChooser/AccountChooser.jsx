/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react'
import 'react-bootstrap';
import * as styles from './accountchooser.module.css';
import axios from "utils/axios";
import Link from "common/Link";


export default class AccountChooser extends Component {

    // static propTypes = {
    //     Type: PropTypes.string.isRequired,
    //     element: PropTypes.objectOf(PropTypes.string).isRequired,
    // }
    
    constructor(props) {
        super(props);
        this.state = {
            // eslint-disable-next-line react/no-unused-state
            basicInfo:{
                "First_Name": "User name",
                "Last_Name": "User name",
                clubs: [
                    {name:"Demo Club"}
                ],
            },

            clubList : [
                'Club 1',
                'Club 2',
                'Club 3',
                'Club 4',
                'Club 5',
            ],

        }
    }

    componentDidMount() {
        axios.get("connect/profile/").then((res) => {
                console.log(res.status);
                console.log(res.data);
                this.setState({
                    basicInfo: res.data[0]
                })
            })
        }

    shouldComponentUpdate()
    { return true;}


    render(){

    return (
        <div>
            <div className="my-4 d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex justify-content-between w-100 mx-auto align-items-center">
                    <img
                        alt="Profile Image"
                        className="rounded-circle"
                        src="https://via.placeholder.com/100x100"
                    />

                    <p className="d-flex flex-column">
                        <h3>
                            {this.state.basicInfo.First_Name}

                            {" "}

                            {this.state.basicInfo.Last_Name}

                        </h3>

                        <span className={styles.manageSpan}>
                            <Link
                                internal
                                to="/profile"
                            >
                                Manage Profile
                            </Link>
                        </span>
                    </p>
                </div>

                <div className={styles.clubManage}>
                    <h5 className="d-flex align-items-center justify-content-center">
                        Club Management
                    </h5>

                    <div className={styles.clubScroll}>

                        



                        <ul className={styles.clubNames}>
                            {this.state.basicInfo.clubs.map((field, index) => {
                            return (
                                <li key={index}> 
                                    {field.name}
                                </li>

                            );
                })}
                        </ul>
                    </div>
                </div>

                <button
                    className={styles.signoutBtn}
                    type="button"
                >
                    Sign Out
                </button>
            </div>
        </div>)
    }
}
