import React from "react";
import PropTypes from "prop-types";
import 'react-bootstrap';
import * as styles from './accountchooser.module.css';
import Link from "common/Link";

export default function AccountChooser({...props}) {

    if(props.data === undefined){return null}

    console.log(props.data ," is data");
    return (
        <div style={{background:"rgb(40, 92, 168) !important"}}>
            <div className=" d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex justify-content-between w-100 mx-auto align-items-center">
                    <img
                        alt="Profile Image"
                        className="rounded-circle"
                        src="https://via.placeholder.com/100x100"
                    />

                    <p className="d-flex flex-column">
                        <h3>
                            {props.data.First_Name} 

                            {" "}

                            {props.data.Last_Name} 

                        </h3>

                        <Link
                            internal
                            to="/profile"
                        >
                            <span >
                                Manage Profile
                            </span>
                        </Link>
                       
                    </p>
                </div>

                {props.isAuthenticated ?
                    <div className={styles.clubManage}>
                        <h5 className="d-flex align-items-center justify-content-center">
                            Club Management
                        </h5>

                        <div className={styles.clubScroll}>
                            <ul className={styles.clubNames}>
                                {props.data.clubs?.map((club) => (
                                    <li key={club.id}>
                                        {club.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                : null }

                {/* <button
                    className={styles.signoutBtn}
                    type="button"
                >
                    Sign Out
                </button> */}
            </div>
        </div>)
}


AccountChooser.defaultProps = {
    data: {},
    isAuthenticated: false,
};

AccountChooser.propTypes = {
    data: PropTypes.objectOf(PropTypes.string),
    isAuthenticated: PropTypes.bool,
};