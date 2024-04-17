import React, { useState, useEffect } from 'react';
import './Update.css';


function Updated_Clock() {



    const [time, setTime] = useState(new Date());


    useEffect(() => {


        let intervalId = setInterval(() => {


            setTime(new Date());


        }, 1000)

        return () => clearInterval(intervalId);
    }, []);




    function formatTime() {
        let hrs = time.getHours();
        let mins = time.getMinutes();
        let secs = time.getSeconds();
        let merediem = hrs >= 12 ? "PM" : "AM";

        if (hrs > 12) {
            hrs = hrs % 12 || 12;
        }




        return (`${padZero(hrs)} : ${padZero(mins)} : ${padZero(secs)} ${merediem}`);

    };



    function padZero(number) {
        return (number < 10 ? "0" : "") + number;
    }

    return (


        <div className='clock-container'>

            <div className='clock'>


                <p>{formatTime()}</p>
            </div>



        </div>


    )


}

export default Updated_Clock;