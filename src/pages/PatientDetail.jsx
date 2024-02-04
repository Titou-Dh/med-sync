import React, { Component } from 'react';

export class PatientDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      patients: [
        { id: 1, name: 'John Doe', age: 30 },
        { id: 2, name: 'Jane Doe', age: 25 },
      ],
      patient: null,
    };
  }

  componentDidMount() {
    const { patients } = this.state();
    const queryParameters = new URLSearchParams(window.location.search);
    const id = queryParameters.get('id');
    const patient = patients.find((p) => p.id === parseInt(id, 10));

    if (!patient) {
      this.setState({ patient: null });
    } else {
      this.setState({ patient });
    }
  }

  render() {
    const { patient } = this.state;

    if (!patient) {
      return <div>Patient not found</div>;
    }

    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">{patient.name}</h2>
        <p>ID: {patient.id}</p>
        <p>Age: {patient.age}</p>
      </div>
    );
  }
}

export default PatientDetail;
