import React from 'react';
import PropTypes from 'prop-types';
import Label from './Label';
import 'bootstrap/dist/css/bootstrap.css';

const Dropdown = ({ htmlId, name, label, options, value, onChange, required = false }) => {
  return (
    <div className="col-md-4">
      <Label htmlFor={htmlId} label={label} required={required}/>
      <select
        id={htmlId}
        className='form-select'
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

Dropdown.propTypes = {
  htmlId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

export default Dropdown;
