import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function CountryChart({ data }) {
  const chartData = {
    labels: data.map((d) => d.country || 'N/A'),
    datasets: [{
      label: 'Count by Country',
      data: data.reduce((acc, cur) => {
        const country = cur.country || 'Unknown';
        acc[country] = (acc[country] || 0) + 1;
        return acc;
      }, {}),
    }],
  };

  const formattedData = {
    labels: Object.keys(chartData.datasets[0].data),
    datasets: [{
      label: chartData.datasets[0].label,
      data: Object.values(chartData.datasets[0].data),
      backgroundColor: '#3498db',
    }],
  };

  return <Bar data={formattedData} />;
}
