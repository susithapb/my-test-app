import React from 'react';
import PropTypes from 'prop-types';

const WizardStep = ({ children }) => {
  return <div>{children}</div>;
};

WizardStep.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WizardStep;
