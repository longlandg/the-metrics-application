import { useState, useEffect } from 'react';
import useFetch from '../functions/useFetch';
let url = process.env.REACT_APP_URL;

const  MetricsSection = () => {
  const { data, error, isLoading } = useFetch(url + '/metrics')
  
  // todo create a set interval to fetch server metrics every 
  // 30 seconds, use fetch needs updating to async await
  return (
  <div className="metrics-section">
    { isLoading && <div>loading...</div> }
    { data && <pre>{ data }</pre>}
    </div>
    );
  }
  
  export default MetricsSection