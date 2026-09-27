'use client';

import { useSyncExternalStore } from 'react';

const formatter = new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'Asia/Kolkata',
});

const subscribe = (onChange: () => void) => {
    const id = setInterval(onChange, 10_000);
    return () => clearInterval(id);
};

const getSnapshot = () => formatter.format(new Date());

// The server renders a placeholder so hydration never disagrees about the minute.
const getServerSnapshot = () => null;

export default function LocalTime() {
    const time = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    return <time>{time ?? '--:--'}</time>;
}
