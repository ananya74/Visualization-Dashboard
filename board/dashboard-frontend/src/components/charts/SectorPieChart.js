import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function SectorPieChart({ data }) {
  const sectorCount = {};

  data.forEach((item) => {
    const sector = item.sector || 'Unknown';
    sectorCount[sector] = (sectorCount[sector] || 0) + 1;
  });

  const chartData = {
    labels: Object.keys(sectorCount),
    datasets: [{
      label: 'Sector Share',
      data: Object.values(sectorCount),
      backgroundColor: [
        '#ff6384', '#36a2eb', '#ffce56', '#8e44ad', '#e67e22', '#2ecc71',
      ],
      borderWidth: 1,
    }]
  };

  return (
  <div style={{ width: '100%', height: '360px' }}>
    <Pie
      data={chartData}
      options={{
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              boxWidth: 20,
              padding: 15,
            },
          },
        },
      }}
    />
  </div>
);

}
