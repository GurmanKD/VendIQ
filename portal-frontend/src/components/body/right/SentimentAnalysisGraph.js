import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const sampleData = [
  { x: new Date('2024-04-28T00:00:00Z'), y: 30 },
  { x: new Date('2024-04-28T01:00:00Z'), y: 40 },
  { x: new Date('2024-04-28T02:00:00Z'), y: 35 },
  // Add more sample data as needed
];

const options = {
  series: [
    {
      data: sampleData,
    },
  ],
  chart: {
    id: 'realtime',
    height: 250,
    type: 'line',
    animations: {
      enabled: true,
      easing: 'linear',
      dynamicAnimation: {
        speed: 1000,
      },
    },
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    colors: ['#948979'],
  },
  title: {
    text: 'Sentiment Analysis',
    align: 'centre',
    style: {
      color: '#DFD0B8', // Set title color
    },
  },
  markers: {
    size: 0,
  },
  xaxis: {
    type: 'datetime',
    labels: {
      style: {
        colors: '#DFD0B8', // Set X-axis label color
      },
    },
    axisBorder: {
      color: '#DFD0B8', // Set X-axis color
    },
    // Define your X axis range here
    // range: XAXISRANGE,
  },
  yaxis: {
    max: 100,
    labels: {
      style: {
        colors: '#DFD0B8', // Set Y-axis label color
      },
    },
    axisBorder: {
      color: '#DFD0B8', // Set Y-axis color
    },
  },
  legend: {
    show: false,
  },
};

const SentimentAnalysisGraph = (props) => {
  const { recieveData } = props;
  useEffect(() => {
    const chart = new ApexCharts(document.querySelector('#chart'), options);
    chart.render();

    // Update chart data at intervals
    const interval = setInterval(() => {
      // Simulating new data
      const newData = sampleData.map((point) => ({
        x: new Date(point.x.getTime() + 3600 * 1000), // Adding an hour
        y: Math.floor(Math.random() * (90 - 10 + 1)) + 10, // Random value between 10 and 90
      }));

      chart.updateSeries([
        {
          data: newData,
        },
      ]);
    }, 1000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return <div id='chart' style={{ background: '#3c5b6f' }}></div>;
};

export default SentimentAnalysisGraph;
