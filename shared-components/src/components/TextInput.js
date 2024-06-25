import React from "react";
import PropTypes from 'prop-types';
import Label from "./Label"
import 'bootstrap/dist/css/bootstrap.css';

const TextInput = ({htmlId, name, label, type="text", required=false, onChange, value, error, ...props}) => {
    return(
        <div className="col-md-4 mb-3">
            <Label htmlFor={htmlId} label={label} required={required}/>
            <input 
                id={htmlId} 
                name={name} 
                className="form-control"
                value={value} 
                type={type} 
                onChange={onChange} 
                style={error && {border: 'solid 1px red'}} 
                {...props}
            />
            {error && <div className="error" style={{color: 'red'}}></div>}
        </div>
    );
};

TextInput.propTypes = {
    htmlId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["text", "number"]),
    required: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.any,
    error: PropTypes.string
};

export default TextInput