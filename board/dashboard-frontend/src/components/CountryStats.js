import React from 'react';
import { Card } from 'react-bootstrap';

// Optional: add emojis or use country flag images via an icon library

export default function CountryStats({ data }) {
  // Build country frequency count
  const countryCounts = data.reduce((acc, cur) => {
    const country = cur.country || 'Unknown';
    acc[country] = (acc[country] || 0) + 1;
    return acc;
  }, {});

  // Sort by count descending
  const sorted = Object.entries(countryCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6); // Show top 6 countries

  return (
    <Card className="p-3 shadow-sm">
      <h5 className="mb-3">🌍 Entries by Country</h5>
      {sorted.map(([country, count], idx) => (
        <div key={idx} className="d-flex justify-content-between align-items-center mb-2">
          <div>{country}</div>
          <div><strong>{count}</strong> entries</div>
        </div>
      ))}
    </Card>
  );
}
