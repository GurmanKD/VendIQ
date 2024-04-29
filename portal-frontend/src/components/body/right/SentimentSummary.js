import './SentimentSummary';
import './SentimentSummary.css'
function SentimentSummary(props) {
  const { recieveData } = props;
  if(!recieveData.length) {
    return <p className='helli'>Sarcasam = Observing</p>;
  }
  return <p className='helli'>Sarcasam = {JSON.stringify(recieveData[recieveData.length-1].sarcasm_detection)}</p>;
}
export default SentimentSummary;
