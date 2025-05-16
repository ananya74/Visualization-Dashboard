import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale } from 'chart.js';

Chart.register(BarElement, CategoryScale, LinearScale);

export default function IntensityChart({ data }) {
  const chartData = {
    labels: data.map((d) => d.topic || 'N/A'),
    datasets: [
      {
        label: 'Intensity',
        data: data.map((d) => d.intensity || 0),
        backgroundColor: 'rgba(75, 192, 192, 0.7)',
      },
    ],
  };

  return <Bar data={chartData} />;
}
