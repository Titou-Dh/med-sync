import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { FaGreaterThan } from 'react-icons/fa';
import { patients } from '../data/dummy.js';
import { Appoint, ChatArea, Files, Meds, Notes, Profile } from '../components';

const PatientDetails = () => {
  const { id } = useParams();

  const patient = patients.find((p) => p.id == id);

  if (!patient) {
    return <h1>Patient not found</h1>;
  }

  return (
    <div className="">
      <h1>{patient.last_name}</h1>
      <div className="flex items-end gap-2 my-4">
        <NavLink to="/" key="0">
          <span className="capitalize text-xl text-blue-500 ">dashboard</span>
        </NavLink>
        <FaGreaterThan className="text-gray-400 text-xl" />
        <NavLink to="/patients" key="0">
          <span className="capitalize text-xl ">Patients</span>
        </NavLink>
        <FaGreaterThan className="text-gray-400 text-xl" />
      </div>
      <div className="">
        <div className="flex items-center">
          <Profile />
          <Notes />
          <Files />
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;
