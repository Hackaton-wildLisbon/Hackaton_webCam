import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PlaceList.css';
import Form from 'react-bootstrap/Form';

const PlaceList = ({ title, handleCountryId, options }) => (
  <Form>
    <Form.Group controlId="exampleForm.SelectCustom">
      <Form.Label htmlFor="location"></Form.Label>
      <Form.Control
        id="custom-placelist"
        as="select"
        custom
        name="location"
        value={title}
        onChange={handleCountryId}
      >
        <option value="">Select a Location</option>
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
