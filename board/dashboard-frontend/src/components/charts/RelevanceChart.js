import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function RelevanceChart({ data }) {
  const chartData = {
    labels: data.map((d) => d.region || 'N/A'),
    datasets: [{
      label: 'Relevance',
      data: data.map((d) => d.relevance || 0),
      backgroundColor: '#2ecc71',
    }],
  };
  return <Bar data={chartData} />;
}
