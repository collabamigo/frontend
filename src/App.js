
import React, {lazy, Suspense} from "react";
import "./App.css";

import {
    Route,
    BrowserRouter as Router,
} from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import AboutUs from "./Components/AboutUs/AboutUs";
import axios from "axios";
import UnauthenticatedHome from "./Components/UnauthenticatedHome/UnauthenticatedHome";
import ExternalHeader from "./Components/Header";
import Loading from "./common/Loading";
import Footer from "./Components/Footer/Footer";
import Demo from "./Components/Demo/Demo";


const Help = lazy(() => import("./Components/Help/Help"))
const Ask = lazy(()=> import("./Components/Ask/Ask"))
const AuthenticatedHome = lazy(() => import("./Components/AuthenticatedHome"))
const Connect = lazy(() => import('./Components/Connect/Connect'))
const Profile = lazy(() => import("./Components/Profile/Profile"))
const Project = lazy(() => import("./Components/project/project"))
const ConnectionRequest = lazy(() => import("./Components/ConnectionRequest/ConnectionRequest"))
const ConnectionHistory = lazy(() => import("./Components/ConnectionHistory"))
const Rickroll = lazy(() => import("./Components/Rickroll"))

class App extends React.Component {
    constructor(props) {
        super(props);

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
                    alert("Authentication error. Please try clicking/tapping on the CollabConnect logo to re-authenticate")
            }
            return Promise.reject(error);
          });

        this.state = {
            "signedIn": false,
        };

        window.gapi.load(
            "auth2",
            () => {
                window.gapi.auth2.init();
            }
        );
    }

    componentDidMount() {
        if (location.host==="collabconnect.web.app" || location.host==="collabamigo.web.app")
            location.host="collabamigo.com"

    }

    shouldComponentUpdate() {
        return true
    }


    handleLogin = () => {
        this.setState({
            "signedIn": true
        });
    }

    render() {

        return (
            <div className="App h-100 w-100">
                <div className="position-relative min-vh-100">
                    <Suspense
                        fallback={<Loading />}
                    >
                        <Router>
                            <>
                                <ExternalHeader isAuthenticated={this.state.signedIn} />

                                <Route
                                    exact
                                    path="/"
                                >

                                    {this.state.signedIn ?
                                        <AuthenticatedHome />
                                : <UnauthenticatedHome 
                                        onLogin={this.handleLogin}
                                  />}
                                </Route>

                                <ProtectedRoute
                                    exact
                                    path="/ask"
                                >
                                    <Ask />
                                </ProtectedRoute>

                                <ProtectedRoute
                                    exact
                                    path="/help"
                                >
                                    <Help />
                                </ProtectedRoute>

                                <ProtectedRoute
                                    exact
                                    path="/profile"
                                >
                                    <Profile />
                                </ProtectedRoute>

                                <ProtectedRoute
                                    exact
                                    path="/collab_connect"
                                >
                                    <Connect />
                                </ProtectedRoute>

                                <Route
                                    exact
                                    path="/project"
                                >
                                    <Project />
                                </Route>

                                <Route
                                    exact
                                    path="/demo"
                                >
                                    <Demo />
                                </Route>



                                <Route
                                    exact
                                    path="/about"
                                >
                                    <AboutUs />
                                </Route>

                                <Route
                                    exact
                                    path="/oops"
                                >
                                    <Rickroll />
                                </Route>

                                <Route
                                    path="/connection/"
                                >
                                    <ConnectionRequest />
                                </Route>

                                <Route
                                    path="/history/"
                                >
                                    <ConnectionHistory />
                                </Route>







                                <Route
                                    exact
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
                                </Route>

                            </>
                        </Router>
                    </Suspense>
                </div>

                <Footer />
                
            </div >
        );

    }

}

export default App;
