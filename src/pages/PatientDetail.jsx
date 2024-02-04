import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumb } from '../components';

export class PatientDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      patients: [
        { id: 1, name: 'John Doe', age: 30 },
        { id: 2, name: 'Jane Doe', age: 25 },
      ],
      patient: null,
      breadcrumbItems: [],
    };
  }

  componentDidMount() {
    const { id } = useParams();
    const { patients } = this.state;
    const patient = patients.find((p) => p.id === parseInt(id, 10));

    if (!patient) {
      // Handle patient not found
      this.setState({ patient: null });
    } else {
      const breadcrumbItems = [
        { label: 'Home', to: '/' },
        { label: 'Patients', to: '/patients' },
        { label: patient.name, to: `/patients/${id}` },
      ];

      this.setState({ patient, breadcrumbItems });
    }
  }

  render() {
    const { patient, breadcrumbItems } = this.state;

    if (!patient) {
      return <div>Patient not found</div>;
    }

    return (
      <div className="p-4">
        <Breadcrumb items={breadcrumbItems} />
        <h2 className="text-2xl font-bold mb-4">{patient.name}</h2>
        <p>ID: {patient.id}</p>
        <p>Age: {patient.age}</p>
      </div>
    );
  }
}

export default PatientDetail;
