import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

export default function InsightCards({ data }) {
  const total = data.length;
  const topCountry = getMostFrequent(data, 'country');
  const topTopic = getMostFrequent(data, 'topic');
  const maxIntensity = Math.max(...data.map((d) => d.intensity || 0));

  function getMostFrequent(arr, field) {
    const freq = {};
    arr.forEach((item) => {
      const key = item[field] || 'Unknown';
      freq[key] = (freq[key] || 0) + 1;
    });
    return Object.entries(freq).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A';
  }

  return (
    <Row className="mb-4">
      <Col md={3}>
        <Card className="text-center shadow-sm">
          <Card.Body>
            <h5>🔥 Total Entries</h5>
            <h3>{total}</h3>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card className="text-center shadow-sm">
          <Card.Body>
            <h5>🌎 Top Country</h5>
            <h4>{topCountry}</h4>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card className="text-center shadow-sm">
          <Card.Body>
            <h5>🎯 Top Topic</h5>
            <h4>{topTopic}</h4>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card className="text-center shadow-sm">
          <Card.Body>
            <h5>📊 Max Intensity</h5>
            <h4>{maxIntensity}</h4>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
