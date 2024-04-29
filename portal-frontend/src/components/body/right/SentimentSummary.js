import './SentimentSummary';
function SentimentSummary(props) {
  const { recieveData } = props;
  return <p>Sarcasam = {JSON.stringify(recieveData)}</p>;
}
export default SentimentSummary;
