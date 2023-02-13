import TimerSection from "../components/TimerSection";
import MetricsSection from "../components/MetricsSection";


const  Home = () => {
  return (
 <div className="Home">

 <section className="timer-s"><TimerSection /></section>
 <section className="metric-s"><MetricsSection /> </section>
  </div>
  );
}
export default Home ;