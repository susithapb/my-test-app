import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';

const NumberInput = ({ htmlId, name, label, value, onChange }) => {
  const handleInputChange = (e) => {
    const { value } = e.target;
    if (/^\d*$/.test(value)) {
      onChange(value);
    }
  };

  return (
   <TextInput 
        htmlId={htmlId}
        name={name}
        label={label}
        value={value}
        type='number'
        onChange={handleInputChange}
    />
  );
};

NumberInput.propTypes = {
  htmlId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NumberInput;