import { useState, useEffect } from 'react';
import useFetch from '../functions/useFetch';
let url = process.env.REACT_APP_URL;

const  TimerSection = () => {
  const [timeDiff, setTimeDiff] = useState('00:00:00');

  const { data, error, isLoading } = useFetch(url + '/time')
console.log(data)
  useEffect(() => {
    const interval = setInterval(() => {
      // console.log(  JSON.parse(data).epoch)
      // console.log(Date.now())
      if("epoch" in (JSON.parse(data).epoch)){
      console.log(Date.now() - JSON.parse(data).epoch)
      }
     
    }, 5000);

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