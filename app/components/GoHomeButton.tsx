'use client'

import { useRouter } from 'next/navigation';
import "./Button.css"

export function GoHomeButton() {
    const router = useRouter();

    const handleRedirect = () => {
        // This should navigate to the homepage
        router.push('/');
    };

    return (
        <button className="addButton" onClick={handleRedirect}>Go Home</button>
    );
}