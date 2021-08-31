import React, {lazy, Suspense} from "react";
import "./App.css";

import {
    Route,
    BrowserRouter as Router,
} from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import AboutUs from "../components/AboutUs/AboutUs";
import axios from "axios";
import UnauthenticatedHome from "../components/UnauthenticatedHome/UnauthenticatedHome";
import ExternalHeader from "../components/Header";
import ClubHomePage from "../components/ClubHomePage/ClubHomePage";
import EventPage from "../components/EventPage/Eventpage";

import { Helmet } from "react-helmet"
import Loading from "../common/Loading";
import Footer from "../components/Footer/Footer";
import Demo from "../components/Demo/Demo";


const Help = lazy(() => import("../components/Help/Help"))
const Ask = lazy(() => import("../components/Ask/Ask"))
const AuthenticatedHome = lazy(() => import("../components/AuthenticatedHome"))
const Connect = lazy(() => import('../components/Connect/Connect'))
const Profile = lazy(() => import("../components/Profile/Profile"))
const Project = lazy(() => import("../components/project/project"))
const ConnectionRequest = lazy(() => import("../components/ConnectionRequest/ConnectionRequest"))
const ConnectionHistory = lazy(() => import("../components/ConnectionHistory"))
const Rickroll = lazy(() => import("../components/Rickroll"))

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

        this.state = {
            "signedIn": false,
        };
    }

    componentDidMount() {
        if (location.host === "collabconnect.web.app" || location.host === "collabamigo.web.app")
            location.host = "collabamigo.com"

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
                <Helmet>
                    <meta charSet="utf-8" />

                    <link
                        href="https://collabamigo.com"
                        rel="canonical"
                    />

                    <link
                        href="%PUBLIC_URL%/icons/favicon_dark.ico"
                        rel="icon"
                    />

                    <meta
                        content="width=device-width, initial-scale=1"
                        name="viewport"
                    />

                    <meta
                        content="#18216d"
                        name="theme-color"
                    />

                    <meta
                        content="A platform to learn and grow"
                        name="description"
                    />

                    <meta
                        content="iiitd.ac.in"
                        name="google-signin-hosted_domain"
                    />

                    <meta
                        content="1O70mbIh0GWQJ6g3UsfCEnQyNUoygyq7k1CbvmWZzsU"
                        name="google-site-verification"
                    />

                    <script
                        async
                        defer
                        src="https://accounts.google.com/gsi/client"
                    />

                    <link
                        href="./img/svg/developer.svg"
                        rel="apple-touch-icon"
                    />

                    <link
                        href="img/icons/favicon_dark.ico"
                        rel="shortcut icon"
                    />

                    <link
                        href="%PUBLIC_URL%/manifest.json"
                        rel="manifest"
                    />

                    <title>
                        CollabAmigo
                    </title>

                    <link
                        href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined&display=swap"
                        rel="stylesheet"
                    />
                </Helmet>

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
                                    path="/club"
                                >
                                    <ClubHomePage clubName="Demo_Club" />
                                </Route>

                                <Route
                                    exact
                                    path="/event"
                                >
                                    <EventPage />
                                </Route>

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

            </div>
        );

    }

}

export default App;


