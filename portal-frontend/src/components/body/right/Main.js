import Heading from './Heading';
import SentimentAnalysisGraph from './SentimentAnalysisGraph';
import History from './History';
import './Main.css';
import DayEndSummary from './DayEndSummary';
import AudioGraph from './PitchGraph';

function Right() {
  return (
    <div className='right-content'>
      <Heading />
      {/* <SentimentAnalysisGraph /> */}
      {/* <DayEndSummary />
      <History /> */}
      <AudioGraph />
    </div>
  );
}

export default Right;
