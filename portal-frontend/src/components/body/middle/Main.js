import Heading from './Heading';
import ChatInterpretation from './ChatInterpretation';
import Suggestion from './Suggestion';

function Middle() {
  return (
    <div style={{ marginTop: '80px' }}>
      <Heading />
      <ChatInterpretation />
      <Suggestion />
    </div>
  );
}

export default Middle;
