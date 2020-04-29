import React from 'react';

const SelectCountry = ({ value, handleChange, options }) => (
	<div className="form-group">
		<label htmlFor="country"> Country </label>
		<select name="country" value={value} onChange={handleChange}>
			<option value="" disabled>
				Select Country
			</option>
			{options.map((option) => (
				<option key={option} value={option} label={option}>
					{option}
				</option>
			))}
		</select>
	</div>
);

export default SelectCountry;

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
