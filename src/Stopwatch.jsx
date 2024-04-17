import React, { useState, useRef, useEffect } from 'react';
import './Stopwatch.css';

function Stopwatch() {


    const [isRunning, setIsRunning] = useState(false);
    const [elpasedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            });
        }

        return () => {
            clearInterval(intervalIdRef.current);

        }

    }, [isRunning]);




    function formatTime() {
        let hours = Math.floor(elpasedTime / (1000 * 60 * 60) % 24);
        let minutes = Math.floor(elpasedTime / (1000 * 60) % 60);
        let seconds = Math.floor((elpasedTime / 1000) % 60);
        let miliseconds = Math.floor((elpasedTime % 1000) / 10);


        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        miliseconds = String(miliseconds).padStart(2, "0");


        return `${minutes}:${seconds}:${miliseconds}`;
    }


    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elpasedTime;
    }


    function stop() {
        setIsRunning(false);
    }


    function reset() {
        setIsRunning(false);
        setElapsedTime(0);


    }


    return (<div className="stopwatch">
        <h1>StopWatch</h1>
        <div className="stopwatch-content">
            <p>{formatTime()}</p>
            <button onClick={start} className='start-button'>Start</button>
            <button onClick={stop} className='stop-button'>Stop</button>
            <button onClick={reset} className='reset-button'>Reset</button>


        </div>




    </div>)

}


export default Stopwatch;