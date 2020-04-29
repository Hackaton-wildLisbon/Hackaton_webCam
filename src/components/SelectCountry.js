import React from 'react';
import './SelectCountry.css';
import Form from 'react-bootstrap/Form';

const SelectCountry = ({ value, handleSelectCountry, options }) => (
  <Form>
    <Form.Group controlId="exampleForm.SelectCustom">
      <Form.Label htmlFor="country"></Form.Label>
      <Form.Control
        id="custom-form"
        as="select"
        custom
        name="country"
        value={value}
        onChange={handleSelectCountry}
      >
        <option value="" disabled>
          Select Country
        </option>
        {options.map((option) => (
          <option key={option} value={option} label={option}>
            {option}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  </Form>
);

export default SelectCountry;
