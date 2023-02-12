import useFetch from '../functions/useFetch';
let url = process.env.REACT_APP_URL;

const  TimerSection = () => {

  const { data, error, isLoading } = useFetch(url + '/time')

  return (
    <div className="metrics-section">
       { isLoading && <div>loading...</div> }
       { data && <pre>{ data }</pre>}

    </div>

  );
}


export default TimerSection