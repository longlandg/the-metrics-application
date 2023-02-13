import { useState, useEffect } from 'react';
import useFetch from '../functions/useFetch';
import stopwatch from '../functions/stopwatch';
let url = process.env.REACT_APP_URL;

const  TimerSection = () => {
  const [timeDiff, setTimeDiff] = useState('00:00:00');
  const { data, error, isLoading } = useFetch(url + '/time')

  // todo get server time rather than just Date.now()
  let serverTime = Date.now()

  // todo create a set interval to fetch server time every 
  // 30 seconds, use fetch needs updating to async await

  useEffect(() => {
    const interval = setInterval(() => {
      let differenceInTime =  (Date.now() - serverTime)/1000
      setTimeDiff(stopwatch(differenceInTime))
    }, 1000);
      return () => clearInterval(interval);
  }, []);
  return (
    <div className="timer-section">
       { isLoading && <div>loading...</div> }
       { data && (<div>
         <p>Most recently fetched server time in epoch seconds:</p>
         <p>{ (JSON.parse(data)).epoch }</p>
         <p>Difference between client machine and most recently fetched server time:</p>
         <p>{ timeDiff }</p>
         </div>)}
         </div>
         );
}


export default TimerSection