import './SentimentSummary';
<<<<<<< HEAD
import './SentimentSummary.css'
function SentimentSummary(props) {
  const { recieveData } = props;
  if(!recieveData.length) {
    return <p className='helli'>Sarcasam = Observing</p>;
  }
  return <p className='helli'>Sarcasam = {JSON.stringify(recieveData[recieveData.length-1].sarcasm_detection)}</p>;
=======
function SentimentSummary() {
  return (
    <p style={{ color: '#DFD0B8' }}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. 😃
    </p>
  );
>>>>>>> aa6edcb (frontent improvements)
}
export default SentimentSummary;
