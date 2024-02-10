import React from 'react';

function Meds() {
  return (
    <div className=" h-64 w-full px-8 flex flex-col items-center justify-around font-semibold bg-white relative rounded-3xl">
      <h1 className=" text-left w-full font-bold">Meds</h1>
      <div className="w-11/12 ">
        <ul className="flex w-full justify-around  items-center">
          <li className="">Name</li>
          <li className="">First day</li>
          <li className="">Last day</li>
          <li className=""> Dose</li>
          <li className="">Status</li>
        </ul>
      </div>
      <div className="h-1/2 w-full  rounded-3xl overflow-y-auto">
        <ul className="divide-y h-full w-full overflow-x-hidden divide-gray-200 ">
          {[...Array(20).keys()].map((index) => (
            <li key={index} className=" h-10 w-full bg-softBlue">
              <table className="w-full ">
                <tr className="flex items-center justify-around">
                  <td className=" text-center border-b-0">Doliprane</td>
                  <td className=" text-center border-b-0">01 Jan 2023</td>
                  <td className=" text-center border-b-0">01 Feb 2023</td>
                  <td className=" text-center border-b-0">3 by day</td>
                  <td className=" text-center border-b-0">Complete</td>
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
