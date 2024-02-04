import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaGreaterThan } from 'react-icons/fa';
import { patients } from '../data/dummy.js';

function Patients() {
  return (
    <div className="p-4 ">
      <div className="flex items-end gap-2 my-4">
        <NavLink to="/" key="0">
          <span className="capitalize text-xl ">dashboard</span>
        </NavLink>
        <FaGreaterThan className="text-gray-400 text-xl" />
        <NavLink to="/patients" key="0">
          <span className="capitalize text-xl ">Patients</span>
        </NavLink>
        <FaGreaterThan className="text-gray-400 text-xl" />
      </div>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Firstname</th>
            <th className="py-2 px-4 border-b">Lastname</th>
            <th className="py-2 px-4 border-b">email</th>
            <th className="py-2 px-4 border-b">gender</th>
            <th className="py-2 px-4 border-b">Ip Adress</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr
              key={patient.id}
            >
              <td className="py-2 px-4 border-b">{patient.id}</td>
              <td className="py-2 px-4 border-b">
                <NavLink to={`/patients/${patient.id}`} className="text-blue-500">
                  {patient.first_name}
                </NavLink>
              </td>
              <td className="py-2 px-4 border-b">{patient.last_name}</td>
              <td className="py-2 px-4 border-b">{patient.email}</td>
              <td className="py-2 px-4 border-b">{patient.gender}</td>
              <td className="py-2 px-4 border-b">{patient.ip_adress}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Patients;
