import React, { useState, useRef } from 'react';
import '../css/Timer.css';

const Countdown = () => {
    const [time, setTime] = useState(0);
    const [remainingTime, setRemainingTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const timerRef = useRef(null);

    const handleStart = () => {
        if (isRunning || time <= 0) return;
        setRemainingTime(time);
        setIsRunning(true);
        timerRef.current = setInterval(() => {
            setRemainingTime((prev) => {
                if (prev <= 1) {
                    clearInterval(timerRef.current);
                    setIsRunning(false);
                    return 0;
                }
                return prev - 1;
            })
        }, 1000);
    };

    const handleStop = () => {
        setIsRunning(false);
        clearInterval(timerRef.current);
    };

    const handleReset = () => {
        setIsRunning(false);
        clearInterval(timerRef.current);
        setRemainingTime(0);
    };

    return (
        <div className='timer-container'>
            <h1>Countdown Timer</h1>
            <input
                type='number'
                placeholder='Enter time in seconds'
                value={time}
                onChange={(e) => setTime(Number(e.target.value))}
                disabled={isRunning}
            />
            <div className='timer-display'>{remainingTime}s</div>
            <div className='timer-controls'>
                <button onClick={handleStart} disabled={isRunning}>Start</button>
                <button onClick={handleStop} disabled={!isRunning}>Stop</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
};

export default Countdown;