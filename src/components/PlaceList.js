import React from 'react';

const PlaceList = ({ value,  options,handleSelectLocation }) => (
  <div className="form-group">
    <label htmlFor="location"> Locations </label>
    <select name="location" value={value} onChange={handleSelectLocation}>
      <option value="" disabled>
        Select location
      </option>
      {options.map((option) => (
        <option key={option} value={option} label={option}>
          {option}
        </option>
      ))}
    </select>
    
  </div>
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
