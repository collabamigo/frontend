import React from "react";
import PropTypes from "prop-types";
import 'react-bootstrap';
import styles from './accountchooser.module.css';
import Link from "common/Link";
import NavDropdown from 'react-bootstrap/NavDropdown'

export default function AccountChooser({...props}) {

    if(props.data === undefined){return null}

    console.log(props.data ," is data");
    return (
        <>
            <div className="d-flex justify-content-end">
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
                <NavDropdown.Item>
                    <h5>
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
                </NavDropdown.Item>
            : null }
        </>)
}


AccountChooser.defaultProps = {
    data: {},
    isAuthenticated: false,
};

AccountChooser.propTypes = {
    data: PropTypes.objectOf(PropTypes.string),
    isAuthenticated: PropTypes.bool,
};