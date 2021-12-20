import Script from "next/script";
import React, {useState} from "react";
import {Helmet} from "react-helmet"
import Header from "./Header"
import Footer from "./Footer/Footer";
import PropTypes from "prop-types";
import {useRouter} from 'next/router';
import DashboardHeader from "./DashboardHeader";
import {App, Main} from "./layout.module.scss";
import SSRProvider from 'react-bootstrap/SSRProvider';
import {authSetLoggedIn, authSetLoggedOut, isBrowser, LoginContext} from "utilities/auth";

function Layout({children}) {
    const router = useRouter();
    const [loggedIn, _setLoggedIn] = useState((isBrowser() && sessionStorage.getItem("loginFlag")));
    const setLoggedIn = () => {
        authSetLoggedIn();
        _setLoggedIn(true);
    }

    const setLoggedOut = () => {
        authSetLoggedOut();
        _setLoggedIn(false);
    }

    return (
        <LoginContext.Provider value={loggedIn}>
            <SSRProvider>
                <Script
                    src="https://accounts.google.com/gsi/client"
                    strategy="beforeInteractive"
                />

                <div className={App}>
                    <Helmet>
                        <meta charSet="utf-8" />

                        <link
                            href="https://collabamigo.com"
                            rel="canonical"
                        />

                        <link
                            href="%PUBLIC_URL%/icons/favicon.ico"
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

                        <link
                            href="./img/svg/developer.svg"
                        />

                        <link
                            href="img/icons/favicon.ico"
                            rel="icon"
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

                    {router.pathname!=="/clubdashboard"?
                        <Header
                            isAuthenticated={loggedIn}
                            setLoggedIn={setLoggedIn}
                            setLoggedOut={setLoggedOut}
                        />:
                        <DashboardHeader isAuthenticated={loggedIn} />}

                    <main className={Main}>
                        {children}
                    </main>

                    <Footer />
                </div>
            </SSRProvider>
        </LoginContext.Provider>)
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout
