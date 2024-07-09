import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import '../app/globals.css';

export default function LoadingPage() {
    const [timeLeft, setTimeLeft] = useState(10);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    useEffect(() => {
        if (timeLeft === 0) {
            alert('Time out!');
            window.location.href = '/';
        }
    }, [timeLeft]);

    return (
        <div className="loading">
            <h1>Loading...</h1>
            <ReactLoading type="balls" color="#000" />
            
        </div>
    );
}