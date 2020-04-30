import React from 'react';
import Card from 'react-bootstrap/Card';
import './Information.css';

const Informations = ({
  city,
  country,
  continent,
  region,
  latitude,
  longitude,
  timezone,
  wikipedia,
}) => {
  return (
    <Card className="card-div" style={{ width: '20rem', height: '17.5rem' }}>
      <Card.Body>
        <Card.Title id="card-title">{city}</Card.Title>
        <Card.Subtitle id="subtitle-text" className="mb-2 text-muted">
          {country} - {continent} - {region}
        </Card.Subtitle>
        <Card.Text className="text-card-wind">
          Longitude: {longitude}{' '}
        </Card.Text>
        <Card.Text className="text-card-wind">Latitude: {latitude}</Card.Text>
        <Card.Text className="text-card-wind">Timezone: {timezone}</Card.Text>
        <Card.Link href={wikipedia} target="_blank">
          Wikipedia page
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default Informations;
