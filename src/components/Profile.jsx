import React from 'react';
import './css/Profile.css';
import Ellipse from './assets/Ellipse.png';

function Profile() {
  return (
    <div className="bg-white w-2/4 h-96 rounded-3xl p-3 flex flex-row justify-center items-center ">
      <div className="w-2/5 flex flex-col justify-center items-center">
        <img className="w-20 h-20" src={Ellipse} />
        <h1 className="text-3xl title1 font-medium">Anthony Cook</h1>
        <p className="text-gris underline ">123456789</p>
        <p className="text-gris">Anothony_Cook@gmail.com</p>
        <h1 className="text-2xl title1 font-bold mt-3">Appointments</h1>
        <div className="flex w-60 mt-7 ">
          <div className="w-1/2 flex flex-col justify-center items-center">
            <h1 className="text-2xl title1 font-bold mt-3">4</h1>
            <p className="text-gris mt-1">Past</p>
          </div>
          <div className="w-1/2 border-solid border-l-2 border-l-gris h-20 flex flex-col justify-center items-center">
            <h1 className="text-2xl title1 font-bold mt-3">2</h1>
            <p className="text-gris mt-1">Upcoming</p>
          </div>
        </div>
      </div>
      <div className="w-3/5 h-80 border-solid border-l-2 border-l-gris flex items-center  text-xs">
        <table className="w-1/2 table-u">
          <tr>
            <td>
              <h2 className="title2">Gender</h2>
              <p>Male</p>
            </td>
          </tr>
          <tr>
            <td>
              <h2 className="title2">Phone number</h2>
              <p>+216 123456789</p>
            </td>
          </tr>
          <tr>
            <td>
              <h2 className="title2">City</h2>
              <p>London</p>
            </td>
          </tr>
          <tr>
            <td>
              <h2 className="title2">Registration day</h2>
              <p>Member status</p>
            </td>
          </tr>
        </table>
        <table className="w-1/2">
          <tr>
            <td>
              <h2 className="title2">Birthday</h2>
              <p>01/04/1987</p>
            </td>
          </tr>
          <tr>
            <td>
              <h2 className="title2">Address</h2>
              <p>079 Begley Street</p>
            </td>
          </tr>
          <tr>
            <td>
              <h2 className="title2">Zip code</h2>
              <p>1082</p>
            </td>
          </tr>
          <tr>
            <td>
              <h2 className="title2">Member status</h2>
              <p>Active member</p>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Profile;
