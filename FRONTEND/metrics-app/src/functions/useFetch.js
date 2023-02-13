import { useState, useEffect } from 'react';

// get authorisation header from .env file for validating request
let authorizationHeader = process.env.REACT_APP_AUTHORIZATION;

// todo make useFetch with async wait so that it can be used with interval
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error,setError] = useState(null)

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