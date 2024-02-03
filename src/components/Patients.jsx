import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from './BreadCrumb.jsx';

const Patients = ({ patients }) => {
  const breadcrumbItems = [
    { label: 'Home', to: '/' },
    { label: 'Patients', to: '/patients' },
  ];

  return (
    <div className="p-4">
      <BreadCrumb items={breadcrumbItems} />
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Age</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td className="py-2 px-4 border-b">{patient.id}</td>
              <td className="py-2 px-4 border-b">
                <Link to={`/patient/${patient.id}`} className="text-blue-500">
                  {patient.name}
                </Link>
              </td>
              <td className="py-2 px-4 border-b">{patient.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Patients;
