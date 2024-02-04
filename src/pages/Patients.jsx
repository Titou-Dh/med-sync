// PatientsClass.js (Class Component)
import React, { Component } from 'react';
import { Link ,NavLink} from 'react-router-dom';
import { FaGreaterThan } from 'react-icons/fa';

class PatientsClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      patients: [
        { id: 1, name: 'John Doe', age: 30 },
        { id: 2, name: 'Jane Doe', age: 25 },
      ],
    };
  }

  render() {
    const { patients } = this.state;
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
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Age</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td className="py-2 px-4 border-b">{patient.id}</td>
                <td className="py-2 px-4 border-b">
                  <Link
                    to={`/patients/patient?id=${patient.id}`}
                    className="text-blue-500"
                  >
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
  }
}

export default PatientsClass;
