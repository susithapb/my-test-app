import React from "react";
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';

const Label = ({htmlFor,label,required}) => {
    return(
        <label className="form-label" htmlFor={htmlFor}>
            {label} {required && <span style={{color:'red'}}>*</span>}
        </label>
    );
};

Label.propTypes = {
    htmlFor: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    isRequired: PropTypes.bool
}

export default Label;