import Head from "next/head";
import Script from "next/script";
import React, {useState} from "react";
import {Helmet} from "react-helmet";
import FirebaseProvider from "firebaseProvider";
import Header from "./Header"
import Footer from "./Footer/Footer";
import PropTypes from "prop-types";
import {useRouter} from 'next/router';
import DashboardHeader from "./DashboardHeader";
import {App, Main} from "./layout.module.scss";
import SSRProvider from 'react-bootstrap/SSRProvider';
import {authSetLoggedIn, authSetLoggedOut, isBrowser, LoginContext} from "utilities/auth";

function Layout({children, title}) {
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

    // eslint-disable-next-line no-undef
    const NEXT_PUBLIC_GA_ID = process.env.NEXT_PUBLIC_GA_ID;

    return (
        <LoginContext.Provider value={loggedIn}>
            <FirebaseProvider loggedIn={loggedIn}>
                <SSRProvider>
                    <Script
                        src="https://accounts.google.com/gsi/client"
                        strategy="beforeInteractive"
                    />

                    <Script
                        src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GA_ID}`}
                        strategy='lazyOnload'
                    />

                    <Script id='ga-analytics'>
                        {
                        `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                
                            gtag('config', '${NEXT_PUBLIC_GA_ID}', {
                                page_path: window.location.pathname,
                              });
                        `
                    }
                    </Script>

                    <div className={App}>
                        <Head>
                            <meta charSet="utf-8" />

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
                                content="website"
                                property="og:type"
                            />

                            <meta
                                content="1O70mbIh0GWQJ6g3UsfCEnQyNUoygyq7k1CbvmWZzsU"
                                name="google-site-verification"
                            />


                            <title>
                                {title}
                            </title>

                        </Head>

                        <Helmet>

                            <link
                                href="/img/icons/favicon.ico"
                                rel="icon"
                            />

                            <link
                                href="%PUBLIC_URL%/manifest.json"
                                rel="manifest"
                            />

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
            </FirebaseProvider>
        </LoginContext.Provider>)
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
}

Layout.defaultProps = {
    title: 'CollabAmigo'
}
export default Layout
