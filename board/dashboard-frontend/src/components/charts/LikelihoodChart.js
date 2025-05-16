import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale } from 'chart.js';

Chart.register(BarElement, CategoryScale, LinearScale);

export default function LikelihoodChart({ data }) {
  const chartData = {
    labels: data.map((d) => d.topic || 'N/A'),
    datasets: [{
      label: 'Likelihood',
      data: data.map((d) => d.likelihood || 0),
      backgroundColor: '#f39c12',
    }],
  };
  return <Bar data={chartData} />;
}
