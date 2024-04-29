import React, { useEffect,useState,useRef } from 'react';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import axios from 'axios'; 

import './Dictaphone.css';

const Dictaphone = (props) => {
  const [count, setCount] = useState(0);
  const {updateSharedData} = props;
  const [fullTranscript, setFullTranscript] = useState('');
  const transcriptBoxRef = useRef(null);
  const {
    transcript,
    listening,
    finalTranscript,
    interimTranscript,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    if (browserSupportsSpeechRecognition) {
      // startListening();
      SpeechRecognition.startListening({ continuous: false ,interimResults:true, language: 'en-IN'});
    }
  }, [browserSupportsSpeechRecognition]);
useEffect(() => {
   if(listening)
   {
    console.log("listening");
   }
   else{
    // if(!fullTranscript.length||!transcript.length){
    //   SpeechRecognition.startListening({ continuous: false ,interimResults:true, language: 'en-IN'});
    //   return;
    // }
    console.log(transcript);
    setFullTranscript(prevTranscript => prevTranscript + ' ' + transcript);
    if(fullTranscript.length&&transcript.length){
      
      
    const sentences = fullTranscript.split('.').map(sentence => sentence.trim()).filter(Boolean);
    const dataToSend = {
      headlines: sentences.map(sentence => ({ headline: sentence }))
    };
    const geminiData={
      "prompts": [
          "Following is in the context of Tecommunication call for AWS.All the following sentences are said by customer, Summarize important points for the call representative also suggest any relevant products you can find along with price. Treat the Last Prompt as most important since it might be the answer to customers question"
      ]
  }
  // if(geminiData.prompts.length<=count){
  //   SpeechRecognition.startListening({ continuous: false ,interimResults:true, language: 'en-IN'});
  //   return;
  // }
  // setCount(count+1);
    sentences.forEach(sentence => {
      geminiData.prompts.push(sentence);
    })
    // Make a POST request with the data
    axios.post('https://kanishk.smartsavaari.in/analyze', dataToSend)
      .then(response => {
        axios.post('https://kanishk3.smartsavaari.in/generate', geminiData)
        .then(response2 => {
          console.log('SENTIMENT request successful:', response.data);
          console.log('GEMINI request successful:', response2.data);
          const resp={
            "sentiment":response.data,
            "gemini":response2.data
          }
          updateSharedData(resp);
        })
        .catch(error => {
          console.error('Error making POST request:', error);
        });
      })
      .catch(error => {
        console.error('Error making POST request:', error);
      });
    }
  

    resetTranscript(); 
    console.log("not listening");
    scrollToBottom();
    SpeechRecognition.startListening({ continuous: false ,interimResults:true, language: 'en-IN'});
   }
}, [listening]);
const scrollToBottom = () => {
  if (transcriptBoxRef.current) {
    transcriptBoxRef.current.scrollTop = transcriptBoxRef.current.scrollHeight;
  }
};
//   useEffect(() => {
//      console.log(finalTranscript);
//      resetTranscript();
//      SpeechRecognition.startListening({ continuous: false , language: 'en-IN'});
//   }, [finalTranscript]);
//   useEffect(() => {
//     console.log(interimTranscript);
    
//     // resetTranscript();
//     // SpeechRecognition.startListening({ continuous: false ,interimResults:true, language: 'en-IN'});
//  }, [interimTranscript]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className='small' ref={transcriptBoxRef}>
      <h2>Status: {listening ? 'Listening' : 'Observing'}</h2>
      <p className='transcript'>{fullTranscript}</p>
    </div>
  );
};

export default Dictaphone;
