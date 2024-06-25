import React, { useState } from 'react';
import { default as TextInput } from 'sharedComponents/TextInput';
import { default as NumberInput } from 'sharedComponents/NumberInput';
import {default as Dropdown } from 'sharedComponents/Dropdown';

const employmentOptions = ['Employed', 'Unemployed', 'Self-employed', 'Student'];

const PersonalDetails = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [employmentStatus, setEmploymentStatus] = useState(employmentOptions[0]);

  return (
    <div>
      <h2>Personal Details</h2>
      <TextInput htmlId="FirstName" name="FirstName" label="First Name" required={true} value={firstName} onChange={setFirstName} />
      <TextInput htmlId="LastName" name="LastName" label="Last Name" required={true} value={lastName} onChange={setLastName} />
      <NumberInput htmlId="PhoneNumber" name="PhoneNumber" label="Phone Number" value={phoneNumber} onChange={setPhoneNumber} />
      <TextInput htmlId="Address" name="Address" label="Address" value={address} onChange={setAddress} />
      <TextInput htmlId="EmailAddress" name="EmailAddress" label="Email Address" value={email} onChange={setEmail} />
      <Dropdown htmlId="EmpStatus" label="Employment Status" name="EmpStatus" options={employmentOptions} value={employmentStatus} onChange={setEmploymentStatus} />
    </div>
  );
};

export default PersonalDetails;
