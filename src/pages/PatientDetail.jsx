import React from 'react';
import { useParams } from 'react-router-dom'; // Access URL parameters
import { patients } from '../data/dummy.js';

const PatientDetails = () => {
  const { id } = useParams(); // Get patient ID from URL

  const patient = patients.find((p) => p.id == id);

  if (!patient) {
    return <h1>Patient not found</h1>;
  }

  return <h1>{patient.last_name}</h1>;
};

export default PatientDetails;
