import React from 'react';
import Card from 'react-bootstrap/Card';

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
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{city}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {country} - {continent} - {region}
        </Card.Subtitle>
        <Card.Text>Longitude: {longitude}</Card.Text>
        <Card.Text>Latitude: {latitude}</Card.Text>
        <Card.Text>Timezone: {timezone}</Card.Text>
        <Card.Link href={wikipedia} target="_blank">
          Wikipedia page
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default Informations;
