import { useState, useEffect } from 'react';
import stopwatch from '../functions/stopwatch';
import useFetchTime from '../functions/useFetchTime';


const  TimerSection = () => {
  const { data , loading } = useFetchTime()
  const [time, setTimer] = useState(555);
  const [timeDiff, setTimeDiff] = useState('00:00:00');
  const [serverTime, setServerTime] = useState(Date.now());
  
  useEffect(() => {
    setTimer(data)
  }, [data])
  
  useEffect(() => {
    const interval = setInterval(() => {
      let differenceInTime =  (Date.now() - serverTime)/1000
      setTimeDiff(stopwatch(differenceInTime))
    }, 1000);
    return () => clearInterval(interval);
  }, [serverTime]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setServerTime(Date.now())
    }, 30000);
    return () => clearInterval(interval);
  }, []);

 
 return (
  <div className="timer-section">
     { loading && <div>loading...</div> }
     { data && (<div>
       <p>Most recently fetched server time in epoch seconds:</p>
       <p>{ time }</p>
       <p>Difference between client machine and most recently fetched server time:</p>
       <p>{ timeDiff }</p>
       </div>)}
       </div>
       );
}

export default TimerSection