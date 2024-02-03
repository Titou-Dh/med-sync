// PatientDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from './BreadCrumb';

const PatientDetail = ({ patients }) => {
  const { id } = useParams();
  const patient = patients.find((p) => p.id === parseInt(id, 10));

  if (!patient) {
    return <div>Patient not found</div>;
  }

  const breadcrumbItems = [
    { label: 'Home', to: '/' },
    { label: 'Patients', to: '/patients' },
    { label: patient.name, to: `/patient/${id}` },
  ];

  return (
    <div className="p-4">
      <Breadcrumb items={breadcrumbItems} />
      <h2 className="text-2xl font-bold mb-4">{patient.name}</h2>
      <p>ID: {patient.id}</p>
      <p>Age: {patient.age}</p>
    </div>
  );
};

export default PatientDetail;
