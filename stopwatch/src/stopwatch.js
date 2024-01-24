import React, { useEffect, useState } from 'react';
import "./stopwatch.css";

function Stopwatch()
{
    //  this is use tate track  stopwatch currently isrunning or not
 const [isrunning, setIsrunning] = useState(false);
//   this usestate store time
const [time, setTime] = useState(0);

//  whenever is stopwatch running at the time called
useEffect(() => {
    let intervalid;
    if(isrunning)
    {
        //  if its ruuning then start after 1 sec and incresed + 1s 
        intervalid = setInterval(() => {
            setTime(prevTime => prevTime+1);
        }, 1000);
    }
    else{
        clearInterval(intervalid)
    }
    return () => clearInterval(intervalid);
}, [isrunning])

//  this is for times take for minute and seconds
 const formattime =() => {
    //  minute conversion
  const min = Math.floor(time/60);
//    sec conversion
const sec = time % 60;
//  this is the foormat of time
return `${min}:${sec < 10 ? "0" : ""}${sec}`
 }

//   clicking the button toggle
 const toggletime =() => {
    setIsrunning(prevIsrunning => ! prevIsrunning)
 }
//   reset handler  for this used for resetting defalut time gone thats why used
const resethandler =()=> {
    setIsrunning(false);
    setTime(0);

}
  return(
    <div>
        <h1>Stopwatch</h1>
        <p>Time: {formattime(time)}</p>
         <button onClick={toggletime}>{isrunning ? "Stop" : "Start"}</button>
         <button onClick={resethandler}>Reset</button>
    </div>
  );
}
export default Stopwatch;
