import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const MicrophoneGraph = () => {
  const [audioData, setAudioData] = useState([]);
  const [stream, setStream] = useState(null);
  const [time, setTime] = useState(0); // Track elapsed time
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = null;
    let startTime = null;

    const getMicrophoneInput = async () => {
      try {
        const audioStream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        setStream(audioStream);

        const audioContext = new AudioContext();
        const analyser = audioContext.createAnalyser();
        const microphone = audioContext.createMediaStreamSource(audioStream);
        microphone.connect(analyser);

        const dataArray = new Uint8Array(analyser.fftSize);
        const bufferLength = analyser.frequencyBinCount;

        const updateData = () => {
          analyser.getByteTimeDomainData(dataArray);
          setAudioData(Array.from(dataArray));
          if (!startTime) startTime = Date.now(); // Start time recording
          setTime((Date.now() - startTime) / 1000); // Calculate elapsed time in seconds
        };

        const interval = setInterval(updateData, 200); // Update graph every 200ms (slower update rate)

        return () => {
          clearInterval(interval);
          audioStream.getTracks().forEach((track) => track.stop());
        };
      } catch (error) {
        console.error('Error accessing microphone:', error);
      }
    };

    getMicrophoneInput();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (audioData.length > 0 && chartRef.current) {
      const smoothedData = smoothAudioData(audioData); // Apply simple moving average filter
      const timeLabels = Array.from(Array(smoothedData.length).keys()).map(
        (i) => i * 0.2 // Adjust the interval as needed
      ); // Time labels (0.1 second intervals)

      const chartData = {
        labels: timeLabels,
        datasets: [
          {
            label: 'Microphone Input',
            data: smoothedData,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      };

      if (chartRef.current.chartInstance) {
        chartRef.current.chartInstance.data.labels = timeLabels;
        chartRef.current.chartInstance.data.datasets[0].data = smoothedData;
        chartRef.current.chartInstance.update();
      } else {
        chartRef.current.chartInstance = new Chart(
          chartRef.current.getContext('2d'),
          {
            type: 'line',
            data: chartData,
            options: {
              animation: false,
              scales: {
                x: {
                  title: {
                    display: true,
                    text: 'Time (s)',
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: 'Amplitude',
                  },
                },
              },
            },
          }
        );
      }
    }
  }, [audioData]);

  // Function to apply a simple moving average filter to the audio data
  const smoothAudioData = (data) => {
    const windowSize = 100; // Adjust window size as needed
    const smoothedData = [];
    for (let i = 0; i < data.length; i++) {
      const startIndex = Math.max(0, i - Math.floor(windowSize / 2));
      const endIndex = Math.min(data.length - 1, i + Math.ceil(windowSize / 2));
      const windowValues = data.slice(startIndex, endIndex + 1);
      let average =
        windowValues.reduce((acc, val) => acc + val, 0) / windowValues.length;
      average -= 122;
      if (average < 10) average = 0.1;
      smoothedData.push(average);
    }
    return smoothedData;
  };

  return (
    <div>
      <h2>Microphone Input Graph</h2>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default MicrophoneGraph;
