import React, { useState } from 'react';
import WizardStep from './WizardStep.js';
import PersonalDetails from '../PersonalDetails/PersonalDetails';
import {default as Button } from 'sharedComponents/Button';

const steps = [
  { name: 'Introduction', component: <div>Introduction Content</div> },
  { name: 'Eligibility', component: <div>Eligibility Content</div> },
  { name: 'Purpose', component: <div>Purpose Content</div> },
  { name: 'Personal Details', component: <PersonalDetails /> },
];

const Wizard = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="wizard">
      <div className="step-nav">
        {steps.map((step, index) => (
          <div key={index} className={`step ${index === currentStep ? 'active' : ''}`}>
            {step.name}
          </div>
        ))}
      </div>
      <div className="step-content">
        {steps[currentStep].component}
        <div className="navigation-buttons">
          <Button onClick={handlePrevious} disabled={currentStep === 0} label="Previous"/>
          <Button onClick={handleNext} disabled={currentStep === steps.length - 1} label="Next" />
        </div>
      </div>
    </div>
  );
};

export default Wizard;
