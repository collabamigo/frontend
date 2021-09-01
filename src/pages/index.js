
import React from "react";


import axios from "axios";
import UnauthenticatedHome from "../components/UnauthenticatedHome/UnauthenticatedHome";

import AuthenticatedHome from "../components/AuthenticatedHome";
import Layout from "../components/Layout";
import {isLoggedIn} from "../utils/auth";



class App extends React.Component {
    constructor(props) {
        super(props);

        if (typeof localStorage !== `undefined`) {
        // This interceptor adds authentication credentials
            axios.interceptors.request.use(function (config) {
                config.headers['aeskey'] = localStorage.getItem('aes_key')
                config.headers['iv'] = localStorage.getItem('iv')
                config.headers['token'] = localStorage.getItem('encrypted_token')
                return config;
            }, function (error) {
                return Promise.reject(error);
            });

            axios.interceptors.response.use(function (response) {
                return response;
            }, function (error) {
                if (localStorage.getItem("err") !== JSON.stringify(error)) {
                    localStorage.setItem("err", JSON.stringify(error))
                    if (error.response.status === 500)
                        alert("Unexpected error occurred. Please contact us if you see this message repeatedly.")
                    else if (error.response.status === 401)
                        alert("Authentication error. Please try clicking/tapping on the CollabAmigo logo to re-authenticate")
                }
                return Promise.reject(error);
            });
    }
    }

    componentDidMount() {
        if (location.host === "collabconnect.web.app" || location.host === "collabamigo.web.app")
            location.host = "collabamigo.com"

    }

    shouldComponentUpdate() {
        return true
    }


    handleLogin () {
        this.setState({
            signedIn: true
        });
    }

    render() {
        return (

            <Layout >

                {/*<Router basepath="/">*/}

                {isLoggedIn() ?
                    <AuthenticatedHome />
                                        : <UnauthenticatedHome
                                                onLogin={this.handleLogin.bind(this)}
                                          />}


                {/*<div
                            path="/403"
                        >

                            <h6 className="row justify-content-center m-2">
                                ERROR: This page is not meant to be directly accessed.
                            </h6>

                            <img
                                alt="Gandalf you shall not pass"
                                className="justify-content-center m-2"
                                loading="lazy"
                                src="https://i.giphy.com/media/njYrp176NQsHS/giphy.gif"
                            />

                            <div className="row justify-content-center m-2">
                                <a
                                    className="btn-lg btn-primary"
                                    href="/"
                                >
                                    Sign in to continue
                                </a>
                            </div>
                        </div>*/}

                {/*</Router>*/}

            </Layout>
        );


    }

}

export default App;


