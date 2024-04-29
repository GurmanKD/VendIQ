import SentimentAnalysisGraph from './SentimentAnalysisGraph';
import './Main.css';
import DayEndSummary from './DayEndSummary';
import SentimentSummary from './SentimentSummary';
import AudioGraph from './PitchGraph';

function Right() {
  return (
    <div className='right-content' style={{ marginTop: '80px' }}>
      <AudioGraph />
      <div style={{ marginBottom: '25px' }} />{' '}
      {/* Space between AudioGraph and SentimentAnalysisGraph */}
      <SentimentAnalysisGraph />
      <Spacediv /> {/* Custom Space */}
      <SentimentSummary />
      <DayEndSummary />
    </div>
  );
}

function Spacediv() {
  return <div style={{ height: '30px' }} />; // Space component
}

export default Right;
