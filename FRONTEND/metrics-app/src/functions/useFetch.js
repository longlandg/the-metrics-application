import { useState, useEffect } from 'react';


let authorizationHeader = process.env.REACT_APP_AUTHORIZATION;

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error,setError] = useState(null)
console.log(url)
useEffect(() => {
  fetch(url, {
    headers: {
      'Authorization' : authorizationHeader
    }
  })
  .then((response) => response.text())
  .then(data => {

    setData(data)
    setIsLoading(false)
    setError(null)
  })
  .catch(err => {
    setIsLoading(false);
      setError(err.message);
    
  });
 
}, [url])
return {data, isLoading, error}
}

export default useFetch;