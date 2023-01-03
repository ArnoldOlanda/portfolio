import React, { useEffect, useState } from 'react'

export const useNetwork = () => {

  const [height, setHeight] = useState(0)

    useEffect(() => {

        const onDisconnect = () => setHeight( 25 );
        const onConnect =    () => setHeight( 0 );

        window.addEventListener('offline',onDisconnect);
        window.addEventListener('online',onConnect);

        return () => {
            removeEventListener('offline',onDisconnect);
            removeEventListener('online',onConnect);
        }
    }, [])

  return {
    height
  }
}
