import React from "react"
import {Router} from "@reach/router"
import Layout from "../components/Layout"
import {isLoggedIn} from "../utils/auth"
import Project from "../components/project/project";
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

    shouldComponentUpdate() {
        return true;
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
              <Profile path="/app/profile" />

              <Project path="/app/project" />

              <ConnectionRequest path="/app/connection" />

              <ConnectionHistory path="/app/history" />
          </Router>
      </Layout>
  )}
}

export default App
