import Heading from './Heading';
import ChatInterpretation from '../left/ChatInterpretation';
import Suggestion from './Suggestion';

function Middle(props) {
  console.log(props);
  const { recieveData } = props;
  return (
    <div style={{ marginTop: '80px' }}>
      <Suggestion recieveData={recieveData} />
    </div>
  );
}

export default Middle;
