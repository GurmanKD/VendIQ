import Heading from './Heading';
import ChatInterpretation from '../left/ChatInterpretation';
import Suggestion from './Suggestion';

function Middle() {
  return (
    <div style={{ marginTop: '80px' }}>
      <Heading />
      <Suggestion />
    </div>
  );
}

export default Middle;
