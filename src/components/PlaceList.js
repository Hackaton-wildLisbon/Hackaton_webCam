import React from 'react';
import './PlaceList.css';
import Form from 'react-bootstrap/Form';

const PlaceList = ({ value, options, handleSelectLocation }) => (
  <Form>
    <Form.Group controlId="exampleForm.SelectCustom">
      <Form.Label htmlFor="location"></Form.Label>
      <Form.Control
        id="custom-placelist"
        as="select"
        custom
        name="location"
        value={value}
        onChange={handleSelectLocation}
      >
        <option value="">Select location</option>
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

{
  /* <Form>
  <Form.Group controlId="exampleForm.SelectCustom">
    <Form.Label>Custom select</Form.Label>
    <Form.Control as="select" custom>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
</Form> */
}
