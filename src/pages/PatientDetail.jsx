import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { FaGreaterThan } from 'react-icons/fa';
import { patients } from '../data/dummy.js';
import { ChatArea, Files, Notes, Profile, Meds, Appoint } from '../components';

const PatientDetails = () => {
  const { id } = useParams();

  const patient = patients.find((p) => p.id == id);

  if (!patient) {
    return <h1>Patient not found</h1>;
  }

  return (
    <div className="">
      <div className="flex items-end gap-2 my-4">
        <NavLink to="/" key="0">
          <span className="capitalize text-xl text-blue-500">dashboard</span>
        </NavLink>
        <FaGreaterThan className="text-gray-400 text-xl" />
        <NavLink to="/patients" key="0">
          <span className="capitalize text-xl text-blue-500">Patients</span>
        </NavLink>
        <FaGreaterThan className="text-gray-400 text-xl" />
        <NavLink to="/patients" key="0">
          <span className="capitalize text-xl ">{patient.first_name}</span>
        </NavLink>
        <FaGreaterThan className="text-gray-400 text-xl" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 px-10">
          <Profile />
          <Notes />
          <Files />
        </div>
        <div className="flex   gap-2 px-10">
          <div className="flex flex-col gap-2 w-3/4">
            <Appoint />
            <Meds />
          </div>
          <div className="w-1/4">
            <ChatArea />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;
