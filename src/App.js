
import React from "react";
// import 'bootswatch/dist/sketchy/bootstrap.min.css';
import "./App.css";
import Ask from "./Components/Ask/Ask";
import Help from "./Components/Help/Help";
import {
    Route,
    BrowserRouter as Router,
} from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
// import Footer from "./Components/Footer/Footer";
import AboutUs from "./Components/AboutUs/AboutUs";
import axios from "axios";
import Profile from "./Components/Profile/Profile";
import Connect from './Components/Connect/Connect'
// import DarkMode from "./Components/Collab/DarkMode/DarkMode";
import ConnectionRequest from "./Components/ConnectionRequest/ConnectionRequest";
import Index from "./Components/AuthenticatedHome";
import UnauthenticatedHome from "./Components/UnauthenticatedHome/UnauthenticatedHome";
// import Collab from "./Components/Collab/Collab";
import ExternalHeader from "./Components/Header";
import ConnectionHistory from "./Components/ConnectionHistory";

// eslint-disable-next-line react/require-optimization
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
                    alert("Authentication error. Please try signing out and signing back in")
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

    handleLogin = () => {
        this.setState({
            "signedIn": true
        });
    }

    render() {

        return (
            <div className="App h-100 w-100">
                <Router>
                    <>
                        <ExternalHeader isAuthenticated={this.state.signedIn} />

                        <Route
                            exact
                            path="/"
                        >

                            {this.state.signedIn ?
                                <Index />
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
                            path="/about"
                        >
                            <AboutUs />
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

                        {/*<Footer />*/}
                    </>
                </Router>
            </div >
        );

    }

}

export default App;
