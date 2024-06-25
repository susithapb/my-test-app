import React from "react";
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';

const Button = ({htmlId, label, onClick}) => {
    return(
        <div>
            <button id={htmlId} type="button" className="btn btn-primary" onClick={onClick}>{label}</button>
        </div>        
    );
};

Button.propTypes = {
    htmlId: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Button;