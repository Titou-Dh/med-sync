import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaGreaterThan } from 'react-icons/fa';
import { patients } from '../data/dummy';

const Patients = () => {
  const [selectedPatientId, setSelectedPatientId] = useState(null);
  const handleRowClick = (patientId) => {
    setSelectedPatientId(patientId);
  };
  return (
    <div className="p-4 ">
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
      <div
        className="bg-white rounded-2xl px-5 py-5 overflow-scroll"
        style={{ height: '80vh' }}
      >
        <table className="min-w-full bg-white  border-gray-300">
          <tbody>
            {patients.map((patient) => (
              <tr
                key={patient.id}
                onClick={() => handleRowClick(patient.id)}
                className={selectedPatientId === patient.id ? 'selected-row' : ''}
              >
                <td className="py-4 px-4 border-b">
                  <NavLink to={`/patients/${patient.id}`} className="text-blue-500">
                    {patient.first_name}
                  </NavLink>
                </td>
                <td className="py-4 px-4 border-b">{patient.last_name}</td>
                <td className="py-4 px-4 border-b">{patient.email}</td>
                <td className="py-4 px-4 border-b">{patient.gender}</td>
                <td className="py-4 px-4 border-b">{patient.ip_address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Patients;
