import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Access URL parameters

const PatientDetails = () => {
  const { patientId } = useParams(); // Get patient ID from URL
  const [patientDetails, setPatientDetails] = useState(null);

  // Fetch patient details using patientId (fetch from API or use pre-loaded data)
  useEffect(() => {
    const fetchPatientDetails = async () => {
      const response = await fetch(`/api/patients/${patientId}`); // Adjust API endpoint
      const data = await response.json();
      setPatientDetails(data);
    };
    fetchPatientDetails();
  }, [patientId]);

  // Render patient details if available
  if (patientDetails) {
    return (
      <div>
        <h2>{patientDetails.name}</h2>
        {/* Display other patient details here */}
      </div>
    );
  }
  return <p>Loading patient details...</p>;
};

export default PatientDetails;

// import React, { Component } from 'react';

// export class PatientDetail extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       // patients: [
//       //   { id: 1, name: 'John Doe', age: 30 },
//       //   { id: 2, name: 'Jane Doe', age: 25 },
//       // ],
//       patient: null,
//     };
//   }

//   // componentDidMount() {
//   //   const { patients } = this.state();
//   //   const queryParameters = new URLSearchParams(window.location.search);
//   //   const id = queryParameters.get('id');
//   //   const patient = patients.find((p) => p.id === parseInt(id, 10));

//   //   if (!patient) {
//   //     this.setState({ patient: null });
//   //   } else {
//   //     this.setState({ patient });
//   //   }
//   // }

//   render() {
//     const { patient } = this.state;

//     if (!patient) {
//       return <div>Patient not found</div>;
//     }

//     return (
//       <div className="p-4">
//         <h2 className="text-2xl font-bold mb-4">{patient.name}</h2>
//         <p>ID: {patient.id}</p>
//         <p>Age: {patient.age}</p>
//       </div>
//     );
//   }
// }

// export default PatientDetail;
