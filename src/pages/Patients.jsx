import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components';

const Patients = () => {
  const breadcrumbItems = [
    { label: 'Home', to: '/' },
    { label: 'Patients', to: '/patients' },
  ];

  const pa = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Doe', age: 25 },
  ];

  return (
    <div className="p-4">
      <Breadcrumb items={breadcrumbItems} />
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Age</th>
          </tr>
        </thead>
        <tbody>
          {pa.map((p) => (
            <tr key={p.id}>
              <td className="py-2 px-4 border-b">{p.id}</td>
              <td className="py-2 px-4 border-b">
                <Link to={`/patient/${p.id}`} className="text-blue-500">
                  {p.name}
                </Link>
              </td>
              <td className="py-2 px-4 border-b">{p.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Patients;
