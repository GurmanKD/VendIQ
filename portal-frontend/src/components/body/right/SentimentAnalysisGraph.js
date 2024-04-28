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
    height: 350,
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
  },
  title: {
    text: 'Dynamic Updating Chart',
    align: 'left',
  },
  markers: {
    size: 0,
  },
  xaxis: {
    type: 'datetime',
    // Define your X axis range here
    // range: XAXISRANGE,
  },
  yaxis: {
    max: 100,
  },
  legend: {
    show: false,
  },
};

const SentimentAnalysisGraph = () => {
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

  return <div id='chart'></div>;
};

export default SentimentAnalysisGraph;
