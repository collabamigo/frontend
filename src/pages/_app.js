/* eslint-disable */
import './styles.css'
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Styles} from "styles/styles";
import BasicLayout from "../components/Layout";
// import {SSRProvider} from 'react-bootstrap';

export default function MyApp({Component, pageProps}) {
    const Layout = Component.Layout || BasicLayout;
    return (
        <Layout>
            <Styles />
            <Component {...pageProps} />
        </Layout>
    )
}

