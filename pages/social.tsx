import React, { useEffect, useState } from 'react'

function Social() {
    const [subscribers, setSubscribers] = useState(6000);

    useEffect(() => {
        const interval = setInterval(() => {
            setSubscribers(subs => subs + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <h1>Subscribers: {subscribers}</h1>
    )
}

export default Social;
