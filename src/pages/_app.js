/* eslint-disable */
import React from "react";
import BasicLayout from "../components/Layout";
// import {SSRProvider} from 'react-bootstrap';
import "styles/App.scss"

export default function MyApp({Component, pageProps}) {
    const Layout = Component.Layout || BasicLayout;
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

