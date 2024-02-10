import React from 'react';

function Meds() {
  return (
    <div className=" h-64 w-full px-8 flex flex-col items-center justify-around  bg-white relative rounded-3xl">
      <h1 className=" ">Meds</h1>
      <div className="w-11/12 ">
        <ul className="flex w-full content-around justify-center items-center">
          <li className="w-1/5">Name</li>
          <li className="w-1/5">First day</li>
          <li className="w-1/5">Last day</li>
          <li className="w-1/5"> Dose</li>
          <li className="w-1/5">Status</li>
        </ul>
      </div>
      <div className="h-1/2 w-full  rounded-3xl overflow-y-auto">
        <ul className="divide-y h-full w-full overflow-x-hidden divide-gray-200 ">
          {[...Array(20).keys()].map((index) => (
            <li key={index} className=" h-10 w-full bg-softBlue">
              <table className="w-full ">
                <tr>
                  <td className="w-1/5 text-center border-b-0">Doliprane</td>
                  <td className="w-1/5 text-center border-b-0">01 Jan 2023</td>
                  <td className="w-1/5 text-center border-b-0">01 Feb 2023</td>
                  <td className="w-1/5 text-center border-b-0">3 by day</td>
                  <td className="w-1/5 text-center border-b-0">Complete</td>
                </tr>
              </table>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Meds;
