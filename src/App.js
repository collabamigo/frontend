
import Collab from "./Components/Collab/Collab";
import React from "react";
// import 'bootswatch/dist/sketchy/bootstrap.min.css';
import "./App.css";
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
import AboutUs from "./Components/AboutUs/AboutUs";
import axios from "axios";
import Profile from "./Components/Profile/Profile";
import Card from "react-bootstrap/Card";
import Connect from './Components/Connect/Connect'
// import DarkMode from "./Components/Collab/DarkMode/DarkMode";
import ConnectionRequest from "./Components/ConnectionRequest/ConnectionRequest";
// import Welcome from "./Components/Welcome/Welcome";


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

                                {/*<DarkMode />*/}
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

                            {/*<Welcome visibility={this.state.signedIn} />*/}

                            {this.state.signedIn ?
                                <section>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-4 mb-4">
                                                <Card className="card_main help_card_main text-secondary card">
                                                    <img
                                                        alt=""
                                                        className="card-img-top"
                                                        src="https://images.unsplash.com/photo-1495653797063-114787b77b23?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                                                    />

                                                    <Card.Body>
                                                        <Card.Title className="card-title font-weight-bold">
                                                            HELP OTHERS
                                                        </Card.Title>

                                                        <br />

                                                        <Card.Text className="card-text">
                                                            Solve other&apos;s doubts and be the mentor you always wanted.
                                                            Using our platform you can reach a larger curious community.
                                                        </Card.Text>

                                                        <Link
                                                            className="col-auto btn btn-primary"
                                                            to="/help"
                                                        >
                                                            Help others
                                                        </Link>

                                                    </Card.Body>
                                                </Card>
                                            </div>

                                            <div className="col-lg-4 mb-4">
                                                <Card className="card_main card ask_card_main text-secondary">
                                                    <img
                                                        alt="noobmaster"
                                                        className="card-img-top"
                                                        src="https://images.unsplash.com/photo-1534551767192-78b8dd45b51b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                                                    />

                                                    <Card.Body className="card-body">
                                                        <Card.Title className="card-title font-weight-bold">
                                                            ASK FOR HELP
                                                        </Card.Title>

                                                        <br />

                                                        <Card.Text className="card-text">
                                                            <b>
                                                                Stack Overflow:404!
                                                            </b>

                                                            {" "}
                                                            Answer not found,

                                                            <br />
                                                            The button below can solve it
                                                        </Card.Text>

                                                        <br />

                                                        <Link
                                                            className="col-auto btn btn-primary"
                                                            to="/ask"
                                                        >
                                                            Ask for help
                                                        </Link>
                                                    </Card.Body>
                                                </Card>
                                            </div>

                                            <div className="col-lg-4 mb-4">
                                                <Card className="card_main card cc_main text-secondary">
                                                    <img
                                                        alt=""
                                                        className="card-img-top"
                                                        src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                                                    />

                                                    <Card.Body className="card-body">
                                                        <Card.Title className="card-title font-weight-bold">
                                                            LET&apos;S  COLLABORATE
                                                        </Card.Title>

                                                        <br />

                                                        <Card.Text className="card-text">
                                                            Find new projects to work.
                                                            Apply for teams and Collaborations.
                                                            Lets keep the learning and helping community alive.
                                                        </Card.Text>

                                                        <div
                                                            className="col-auto btn btn-primary disabled"
                                                            to="/collab_connect"
                                                        >
                                                            Coming Soon...
                                                        </div>

                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        </div>
                                    </div>
                                </section>

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
                                    Sign in to continue
                                </h5>
                            </a>
                        </Route>

                        <Footer />
                    </>
                </Router>
            </div >
        );

    }

}

export default App;

// Shikhar's code
{/* <>
<div className="row">
    <div className="col-auto" />

    <Card className="card_main card ask_card_main card-body text-secondary">
        <Card.Body>
            <Card.Title className="card-header font-weight-bold">
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

    <div className="col-auto" />

    <Card className="card_main help_card_main card-body text-secondary">
        <Card.Body>

            <Card.Title className="card-header font-weight-bold">
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

    <div className="col-auto" />

</div>

<br />

<div className="row">
    <div className="col-auto" />

    {/*<Card className="card_main cc_main card-body text-secondary">*/}

{/*    <Card.Body>*/ }

{/*        <Card.Title className="card-header font-weight-bold">*/ }

{/*            Collaborate and Connect*/ }

{/*        </Card.Title>*/ }

{/*        <br />*/ }

{/*        <Card.Text >*/ }

{/*            <p>*/ }

{/*                It is a place where you can find new projects to work*/ }

{/*                upon and gain new experience. One can also apply for helping*/ }

{/*                a team by being a part of it or on interim basis depending on the team.*/ }

{/*                Lets keep the learning and helping community alive.*/ }

{/*            </p>*/ }

{/*        </Card.Text>*/ }

{/*        <Link*/ }

{/*            className="col-auto btn btn-primary"*/ }

{/*            to="/collab_connect"*/ }

{/*        >*/ }

{/*            Lets Collaborate*/ }

{/*        </Link>*/ }

{/*    </Card.Body>*/ }

{/*</Card>*/ }
// </div >
// </> * /}
