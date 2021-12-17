/* eslint-disable react/button-has-type */

// import React, {useState} from 'react'
// import { SvgIcon } from "../../../common/SvgIcon";
// import {NotHidden, Burger, Label} from "./Header.module.css";
// import PropTypes from "prop-types";
// import DropdownMenu from "./DropdownMenu/DropdownMenu";
// import { Drawer, Menu } from "antd";
// import {MenuOutlined} from "@ant-design/icons";
// // import Row from 'react-bootstrap/Row'
// // import Col from 'react-bootstrap/Col'
// // import Container from 'react-bootstrap/Container'
// export default function Header({ isAuthenticated }) {
//     const [visible, setVisibility] = useState(false);

//     const showDrawer = () => {
//         setVisibility(!visible);
//     };

//     const onClose = () => {
//         setVisibility(!visible);
//     };


//     return (
//         <>
//             <div className="d-flex justify-content-around sticky-top bg-white ">

//                 <div >
//                     <Link
//                         aria-label="homepage"
//                         className='col-auto'
//                         to="/"
//                     >
//                         <SvgIcon
//                             height="78px"
//                             src="logo.svg"
//                             width="300px"
//                         />
//                     </Link>
//                 </div>

//                 <div >
//                     <div className={NotHidden+" text-end"}>
//                         <DropdownMenu isAuthenticated={isAuthenticated} />
//                     </div>
//                 </div>

//                 <div
//                     className={Burger}
//                     onClick={showDrawer}
//                 >
//                     <MenuOutlined />
//                 </div>

//                 <Drawer
//                     closable
//                     onClose={onClose}
//                     visible={visible}
//                 >
//                     <div
//                         className="col mb-4"
//                     >
//                         <span
//                             className={Label}
//                             onClick={onClose}
//                         >
//                             <div className="col">
//                                 <Menu>
//                                     Menu
//                                 </Menu>
//                             </div>

//                             <div className="col">
//                                 <MenuOutlined />
//                             </div>
//                         </span>
//                     </div>

//                     <DropdownMenu isAuthenticated={isAuthenticated} />
//                 </Drawer>

//             </div>

//             {/* 

//             <header className="mb-3 sticky-top bg-white w-100 pe-4">
//                 <div className=" row justify-content-center">
//                     <div className="col-auto ms-5">
//                         <Link
//                             aria-label="homepage"
//                             className='col-auto'
//                             to="/"
//                         >
//                             <SvgIcon
//                                 height="78px"
//                                 src="logo.svg"
//                                 width="300px"
//                             />
//                         </Link>
//                     </div>

//                     <div className="col-auto" />

//                     <div className={NotHidden+" col align-content-end text-end"}>
//                         <DropdownMenu isAuthenticated={isAuthenticated} />
//                     </div>

//                     <div
//                         className={Burger}
//                         onClick={showDrawer}
//                     >
//                         <MenuOutlined />
//                     </div>

//                     <Drawer
//                         closable={false}
//                         onClose={onClose}
//                         visible={visible}
//                     >
//                         <div
//                             className="col mb-4"
//                         >
//                             <span
//                                 className={Label}
//                                 onClick={onClose}
//                             >
//                                 <div className="col">
//                                     <Menu>
//                                         Menu
//                                     </Menu>
//                                 </div>

//                                 <div className="col">
//                                     <MenuOutlined />
//                                 </div>
//                             </span>
//                         </div>

//                         <DropdownMenu isAuthenticated={isAuthenticated} />
//                     </Drawer>
//                 </div>
//             </header > */}
//         </>
//     );
// }

// Header.propTypes = {
//     isAuthenticated: PropTypes.bool.isRequired
// }
import axios from "utilities/axios";

import PropTypes from "prop-types";
import { SvgIcon } from "../../../common/SvgIcon";
import React, { useState, useEffect} from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import { setLoggedOut} from "utilities/auth";
import Link from "common/Link";
import Image from 'react-bootstrap/Image';
import isEmpty from "lodash/isEmpty";
import styles from "./Header.module.css";

function signOut() {
    setLoggedOut()
    window.location.href = "/";
}

export default function Header({ isAuthenticated }) {

    const [data, setData] = useState();

    useEffect(() => {
        if (isEmpty(data))
            axios.get(`connect/profile`)
                .then(res => setData(res.data[0])).catch(err => console.log(err))
    })

    if(data === undefined){return null}
    return (
        <Navbar
            bg="dark"
            className={styles.navbar + " sticky-top mb-4 "}
            collapseOnSelect
            expand="lg"
            variant="dark"
        >
            <Container>
                <Navbar.Brand href="#home">
                    <Link
                        aria-label="homepage"
                        className='col-auto'
                        to="/"
                    >
                        <SvgIcon
                            className="col-"
                            height="60px"
                            src="logo.svg"
                            width="250px"
                        />
                    </Link>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" />

                    <Nav>
                 
                        

                        {isAuthenticated ?
                    
                            <NavDropdown
                                id="dropdown-button-drop-start" 
                                title={data.First_Name + " " + data.Last_Name}

                            >
                                <NavDropdown.Item href="/history">
                                    Connections
                                </NavDropdown.Item>

                                <NavDropdown.Item href="/profile">
                                    My Profile
                                </NavDropdown.Item>

                                <NavDropdown.Divider />

                                {isAuthenticated ?
                                    <>
                                        <h6 className="p-2">
                                            Club Management
                                        </h6>

                                        <ul
                                            className=" p-0 m-0"
                                            style={{listStyle: "none"}}
                                        >
                                            {data.clubs?.map((club) => (
                                                    // TODO: Links sahi krdo
                                                <li key={club.id}>
                                                    <NavDropdown.Item href="#action/3.4">
                                                        {club.name}
                                                    </NavDropdown.Item>
                                                </li>
                                                ))}
                                        </ul>
                                    </>
                                : null }
                                
                                {/* <AccountChooser 
                                    data={data}
                                    isAuthenticated={isAuthenticated}
                                /> */}

                                <NavDropdown.Divider />

                                {isAuthenticated ?
                                    <div>
                                        <Nav.Link
                                            className={styles.signoutBtn  + " text-light text-center w-75"}
                                            href="#deets"
                                            onClick={signOut}
                                        >
                                            Sign out
                                        </Nav.Link>
                                    </div>
                            : null}
                            </NavDropdown>
                        : null }
                        
                        {!isAuthenticated?
                            <Nav.Link
                                eventKey={2}
                                href="/welcome"
                            >
                                Log in
                            </Nav.Link>
                        : null}
                        

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


Header.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
}
