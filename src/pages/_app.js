/* eslint-disable */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import BasicLayout from '../components/Layout';
import 'styles/App.scss';
import { Metrics } from '@layer0/rum';
import * as ga from 'lib/ga';
import { onMessageListener } from 'firebaseProvider';
import Notifications from '../components/Notifications';

if (process.env.NEXT_PUBLIC_ENVIRONMENT === 'production') {
  // Disable console.log() in production
  console.log = () => {};
  // console.error = () => {
  // }
  // console.debug = () => {
  // }
}

export default function MyApp({ Component, pageProps }) {
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: '', body: '' });
  new Metrics({
    token: process.env.NEXT_PUBLIC_LAYER0_RUM_TOKEN,
  }).collect();

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  onMessageListener()
    .then((payload) => {
      setShow(true);
      setNotification({
        title: payload.notification.title,
        body: payload.notification.body,
      });
      console.log(payload);
    })
    .catch((err) => console.log('failed onMessageListener: ', err));

  console.log('show', show);
  console.log('notification', notification);
  return (
    <BasicLayout title={Component.title ? Component.title : 'CollabAmigo'}>
      <Component {...pageProps} />
      <Notifications />
    </BasicLayout>
  );
}
