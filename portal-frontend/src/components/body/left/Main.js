import CurrentCall from './CurrentCall';
import CallLogs from './CallLogs';
import ChatInterpretation from './ChatInterpretation';

function Left() {
  return (
    <div style={{ marginTop: '80px' }}>
      <CurrentCall />
      <CallLogs />
      <ChatInterpretation />
    </div>
  );
}

export default Left;
