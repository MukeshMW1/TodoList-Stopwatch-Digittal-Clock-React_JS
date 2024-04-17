import React, { useEffect, useState } from 'react';




function Digital_Clock() {

    const [hr, setHr] = useState(new Date().getHours());
    const [min, setMin] = useState(new Date().getMinutes());
    const [sec, setSec] = useState(new Date().getSeconds());


    function update() {
        let intervalId = setInterval(() => {

            setHr(h => updateHr());
            setMin(m => updateMin());
            setSec(s => updateSec());
        }, 1000)

        return () => clearInterval(intervalId);
    }

    function updateHr() {
        // console.log("hr is updated");


        let hr = new Date().getHours();
        if (hr > 12) {

            hr = hr % 12 || 12;
        }
        // console.log(hrs.length);
        if (hr.toString().length != 2) {
            return hr = '0' + hr;
        }
        else {
            return hr;
        }
    }



    function updateMin() {
        let min = new Date().getMinutes();
        // console.log(hrs.length);
        if (min.toString().length != 2) {
            return min = '0' + min;
        }
        else {
            return min;
        }
    }




    function updateSec() {
        let sec = new Date().getSeconds();
        // console.log(hrs.length);
        if (sec.toString().length != 2) {
            return sec = '0' + sec;
        }
        else {
            return sec;
        }
    }



    useEffect(update, []);




    return (

        <>


            <p>{hr} : {min} : {sec}</p>

        </>



    );

}



export default Digital_Clock;