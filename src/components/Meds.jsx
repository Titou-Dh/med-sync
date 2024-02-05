import React from 'react';

function Meds() {
  return (
    <div className=" h-80 w-9/12 bg-white relative rounded-3xl">
      <h1 className="absolute ml-10 mt-10">Meds</h1>
      <div className=" ml-20 mt-20 absolute w-11/12 ">
        <ul className="flex w-full content-around justify-center items-center">
          <li className="w-1/5">Name</li>
          <li className="w-1/5">First day</li>
          <li className="w-1/5">Last day</li>
          <li className="w-1/5"> Dose</li>
          <li className="w-1/5">Status</li>
        </ul>
      </div>
      <div className="h-1/2 w-11/12 absolute bottom-10 left-11 rounded-3xl overflow-y-auto">
        <ul className="divide-y h-full w-11/2 overflow-x-hidden divide-gray-200 ">
          {[...Array(20).keys()].map((index) => (
            <li key={index} className=" h-10 w-full bg-softBlue">
              <table className="flex w-full content-between justify-center items-center ">
                <td className="w-1/5 border-b-0">Doliprane</td>
                <td className="w-1/5 border-b-0">01 Jan 2023</td>
                <td className="w-1/5 border-b-0">01 Feb 2023</td>
                <td className="w-1/5 border-b-0">3 by day</td>
                <td className="w-1/5 border-b-0">Complete</td>
              </table>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Meds;
