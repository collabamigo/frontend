import "./App.css";
import Collab from "./Components/Collab/Collab";
import React from "react";
import GoogleSignIn from "./Components/GoogleSignIn/GoogleSignIn";
import Ask from "./Components/Ask/Ask";
import Help from "./Components/Help/Help";
import {
    Link,
    Route,
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import Footer from "./Components/Footer/Footer";
import About from "./Components/AboutUs/AboutUs";
import axios from "axios";
import Profile from "./Components/Profile/Profile";
import Card from "react-bootstrap/Card";


// eslint-disable-next-line react/require-optimization
class App extends React.Component {
    constructor (props) {
        super(props);
        axios.interceptors.request.use(function (config) {
            config.headers['aeskey'] = localStorage.getItem('aes_key')
            config.headers['iv'] = localStorage.getItem('iv')
            config.headers['token'] = localStorage.getItem('encrypted_token')
            console.log(config)
            return config;
          }, function (error) {
            return Promise.reject(error);
          });

        this.state = {
            "signedIn": Boolean(localStorage.getItem("userName"))
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

    render () {
        return (
            <div className="App">
                <Router>
                    <>
                        <Switch>
                            <Route
                                exact
                                path="/"
                            >
                                {/* TODO: Put banner here*/}

                                <Collab
                                    className="jumbotron"
                                    title="Collab Connect"
                                />
                            </Route>

                            <Route>
                                <Collab
                                    className="jumbotron"
                                    title="Collab Connect"
                                />
                            </Route>
                        </Switch>

                        <Route
                            exact
                            path="/"
                        >
                            <GoogleSignIn
                                onClick={this.handleLogin}
                                visibility={!this.state.signedIn}
                            />

                            {this.state.signedIn?
                                <div className="row">
                                    <div className="col-auto" />

                                    <Card className="card_main card ask_card_main card-body text-secondary">
                                        <Card.Body>
                                            <Card.Title className="card-header">
                                                Ask for Help
                                            </Card.Title>

                                            <br />

                                            <Card.Text>
                                                This is ask for help.
                                                If you have doubts they will be solved.
                                            </Card.Text>

                                            <Link
                                                className="col-auto btn btn-primary"
                                                to="/ask"
                                            >
                                                Ask for help
                                            </Link>
                                        </Card.Body>
                                    </Card>

                                    <div className="col-2" />

                                    <Card className="card_main help_card_main card-body text-secondary">
                                        <Card.Body>

                                            <Card.Title className="card-header">
                                                Help Others
                                            </Card.Title>

                                            <br />

                                            <Card.Text>
                                                <p>
                                                    This is Help others.
                                                    If you have doubts they will be solved.
                                                    Aditya Will help us place ourselves in this grid , cause I am lazy
                                                </p>
                                            </Card.Text>

                                            <Link
                                                className="col-auto btn btn-primary"
                                                to="/help"
                                            >
                                                Help Others
                                            </Link>
                                        </Card.Body>
                                    </Card>

                                    <div className="col-3" />



                                    <div className="col-2" />

                                    <div className="col-5" />

                                </div>

                                : null}
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
                            <Help Vendor />
                        </ProtectedRoute>

                        <ProtectedRoute
                            exact
                            path="/profile"
                        >
                            <Profile />
                        </ProtectedRoute>

                        <Route
                            exact
                            path="/about"
                        >
                            <About />
                        </Route>

                        <Route
                            exact
                            path="/403"
                        >
                            <h6>
                                ERROR: This page is only visible to logged in users. Meet Gandalf
                            </h6>

                            <img
                                alt="Gandalf you shall not pass"
                                loading="lazy"
                                src="https://i.giphy.com/media/njYrp176NQsHS/giphy.gif"
                            />

                            <a href="/">
                                <h5>
                                    Go to homepage
                                </h5>
                            </a>
                        </Route>

                        <Footer />
                    </>
                </Router>
            </div>
        );

    }

}

export default App;
