import React from "react"
import {Helmet} from "react-helmet"
import Header from "./Header"

// Global styles and component-specific styles.
import {isLoggedIn} from "../../utils/auth";
import Footer from "./Footer/Footer";
import PropTypes from "prop-types";
import {useRouter} from 'next/router';
import DashboardHeader from "./DashboardHeader";

function Layout({children}) {
    const router = useRouter();
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
                {router.pathname!=="/clubdashboard"?
                    <Header isAuthenticated={isLoggedIn()} />:
                    <DashboardHeader isAuthenticated={isLoggedIn()} />}

                <main>
                    {children}
                </main>


            </div>

            <Footer />
        </div>)
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}
export default Layout
