/* eslint-disable */
import React from "react";
import BasicLayout from "../components/Layout";
// import {SSRProvider} from 'react-bootstrap';
import "styles/App.scss"

import {Metrics} from '@layer0/rum'


export default function MyApp({Component, pageProps}) {
    new Metrics({
        token: '0d764cb7-fbb3-4c5b-8a77-0483c87215c2'
    }).collect()

    const Layout = Component.Layout || BasicLayout;
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

