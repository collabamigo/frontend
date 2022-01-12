/* eslint-disable */
import {useRouter} from "next/router";
import React, {useEffect} from "react";
import BasicLayout from "../components/Layout";
import "styles/App.scss"
import {Metrics} from '@layer0/rum'
import FirebaseProvider from "firebaseProvider"
import * as ga from 'lib/ga'

if (process.env.NEXT_PUBLIC_ENVIRONMENT === 'production') {
    // Disable console.log() in production
    console.log = () => {
    }
    // console.error = () => {
    // }
    // console.debug = () => {
    // }
}

export default function MyApp({Component, pageProps}) {
    new Metrics({
        token: process.env.NEXT_PUBLIC_LAYER0_RUM_TOKEN
    }).collect()

    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = (url) => {
            ga.pageview(url)
        }
        //When the component is mounted, subscribe to router changes
        //and log those page views
        router.events.on('routeChangeComplete', handleRouteChange)

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    return (
        <BasicLayout title={Component.title?Component.title:"CollabAmigo"}>
            <FirebaseProvider>
                <Component {...pageProps} />
            </FirebaseProvider>
        </BasicLayout>
    )
}

