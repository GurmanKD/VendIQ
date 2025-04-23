import SentimentAnalysisGraph from './SentimentAnalysisGraph';
import './Main.css';
import DayEndSummary from './DayEndSummary';
import SentimentSummary from './SentimentSummary';
import AudioGraph from './PitchGraph';

function Right() {
  return (
    <div className='right-content' style={{ marginTop: '80px' }}>
      <AudioGraph />
      <SentimentAnalysisGraph />
      <SentimentSummary />
      <DayEndSummary />
    </div>
  );
}

export default Right;
