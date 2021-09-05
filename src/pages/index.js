
import React from "react";


import axios from "axios";
import UnauthenticatedHome from "../components/UnauthenticatedHome/UnauthenticatedHome";

import AuthenticatedHome from "../components/AuthenticatedHome";
import Layout from "../components/Layout";
import {isLoggedIn} from "../utils/auth";



class App extends React.Component {
    constructor(props) {
        super(props);

        if (typeof localStorage !== `undefined` && localStorage.getItem('access')) {
        // This interceptor adds authentication credentials
            axios.interceptors.request.use(function (config) {
                config.headers['Authorization'] = "Token " + localStorage.getItem('access')
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

    render() {
        return (

            <Layout >

                {isLoggedIn() ?
                    <AuthenticatedHome />
                                        : <UnauthenticatedHome />}


            </Layout>
        );


    }

}

export default App;


