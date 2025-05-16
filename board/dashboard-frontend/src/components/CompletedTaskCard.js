import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function CompletedTaskCard() {
  const percentage = 85;

  return (
    <div className="card p-4 shadow-sm text-center">
      <h5 className="mb-3">✅ Completed Tasks</h5>
      <div style={{ width: 120, height: 120, margin: '0 auto' }}>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            pathColor: '#7367f0',
            textColor: '#222',
            trailColor: '#eee',
            textSize: '18px',
          })}
        />
      </div>
      <p className="text-muted mt-3">In the last 7 days</p>
    </div>
  );
}
