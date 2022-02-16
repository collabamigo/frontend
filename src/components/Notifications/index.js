import React, { useEffect, useState } from 'react';
import { getFToken } from 'firebaseProvider';

function Notifications(props) {
  const [isTokenFound, setTokenFound] = useState(false);
  console.log('Token found', isTokenFound);
  useEffect(() => {
    let data;
    async function tokenFunc() {
      data = await getFToken(setTokenFound);
      if (data) {
        console.log('Token is', data);
      }
      return data;
    }
    tokenFunc();
  }, [setTokenFound]);
  return <></>;
}
export default Notifications;
