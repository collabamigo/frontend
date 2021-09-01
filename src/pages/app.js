import React from "react"
import {Router} from "@reach/router"
import Layout from "../components/Layout"
import {isLoggedIn} from "../utils/auth"
import Ask from "../components/Ask/Ask";
import Help from "../components/Help/Help";
import Connect from "../components/Connect/Connect";
import ClubHomePage from "../components/ClubHomePage/ClubHomePage";
import EventPage from "../components/EventPage/Eventpage";
import Project from "../components/project/project";
import Demo from "../components/Demo/Demo";
import AboutUs from "../components/AboutUs/AboutUs";
import Rickroll from "../components/Rickroll";
import ConnectionRequest from "../components/ConnectionRequest/ConnectionRequest";
import ConnectionHistory from "../components/ConnectionHistory";
import Profile from "../components/Profile/Profile";

class App extends React.Component{

    constructor() {
        super();
        this.state = {
            signedIn: isLoggedIn(),
        };
    }

    componentDidUpdate() {
        if (!this.state.signedIn && isLoggedIn()) {
            // eslint-disable-next-line react/no-did-update-set-state
            this.setState({
                signedIn: true
            })
        }
    }

    render() {
  return (
      <Layout>
          <Router>
              <Help path="/app/help" />

              <Profile path="/app/profile" />


              <Connect path="/app/collab_connect" />


              <ClubHomePage
                  clubName="Demo_Club"
                  path="/app/club"
              />


              <EventPage path="/app/event" />


              <Project path="/app/project" />


              <Demo path="/app/demo" />

              <Rickroll path="/app/oops" />


              <ConnectionRequest path="/app/connection" />


              <ConnectionHistory path="/app/history" />
          </Router>
      </Layout>
  )}
}

export default App
