
import { useState, useEffect} from 'react';
// get authorisation header from .env file for validating request
let authorizationHeader = process.env.REACT_APP_AUTHORIZATION;

const useFetchTime = () => {
  const [data, setData] = useState(5555);
  const [loading, setLoading] = useState(true);
  

  


  async function fetchServerTime() {
 setLoading(true)
    const response = await fetch('http://localhost:3001/time', {
      headers: {
        'Authorization' : authorizationHeader
      }
    })
    
    const data = await response.json()
    setData(data.epoch)
        setLoading(false)
}

  useEffect(() =>{
    const res = fetchServerTime()

    setData(res.epoch)
  setLoading(false)
},[])
useEffect(() =>{
    const interval = setInterval(() => {
      const res = fetchServerTime()
    setData(res.epoch)
  setLoading(false)
    }, 30000);
    console.log('othertimes')
    return () => clearInterval(interval);
  },[])


return { data, loading }
}
 

export default useFetchTime;