import React from 'react';
import './PlaceList.css';
import Form from 'react-bootstrap/Form';

const PlaceList = ({ value, options, handleSelectLocation }) => (
  <Form>
    <Form.Group >
      <Form.Label htmlFor="location"></Form.Label>
      <Form.Control
        id="custom-placelist"
        as="select"
        custom
        name="location"
        value={value}
        onChange={handleSelectLocation}
      >
         <option value="" disabled>
           Select location</option>
        {options.map((option) => (
          <option key={option} value={option} label={option}>
            {option}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  </Form>
);

export default PlaceList;


