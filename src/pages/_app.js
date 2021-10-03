import './styles.css'
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Styles} from "styles/styles";
import Layout from "../components/Layout";
import {StateMachineProvider} from "little-state-machine";

// This default export is required in a new `pages/_app.js` file.
// eslint-disable-next-line react/prop-types
export default function MyApp({Component, pageProps}) {
    return (
        <StateMachineProvider>
            <Layout>
                <Styles />

                <Component {...pageProps} />
            </Layout>
        </StateMachineProvider>
                )
}
