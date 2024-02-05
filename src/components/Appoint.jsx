import React from 'react';
import BiJournalText from 'react-icons/bi';

function Appoint() {
  return (
    <div className="h-96 w-9/12 bg-white relative rounded-3xl">
      <div className="bg-lightGris max-w-fit p-3 rounded-xl ml-11 mt-5 absolute">
        <button
          type="button"
          className=" bg-transparent p-1.5 text-gris rounded-lg mr-3 focus:bg-primaryBlue focus:text-white "
          ref={(inp) => {
            inp.focus();
          }}
        >
          Upcoming appointment
        </button>
        <button
          type="button"
          className=" bg-transparent p-1.5 text-gris rounded-lg mr-3 focus:bg-primaryBlue focus:text-white"
        >
          Past appointment
        </button>
        <button
          type="button"
          className=" bg-transparent p-1.5 text-gris rounded-lg mr-3 focus:bg-primaryBlue focus:text-white"
        >
          Missed appointment
        </button>
      </div>
      <button
        type="button"
        className=" bg-primaryBlue p-2 hover:bg-sky-700  text-white rounded-lg right-14 text-sm mt-8 absolute "
      >
        Add Appointment
      </button>

      <div className="h-4/6 w-11/12 absolute bottom-5 left-11 bg-softBlue rounded-3xl overflow-y-auto">
        <ul className="divide-y h-full p-7 divide-gray-200">
          {[...Array(20).keys()].map((index) => (
            <li
              key={index}
              className="py-2.5 ml-5 h-20 bg-white mb-9 rounded-3xl"
            >
              <table className="flex content-center justify-center items-center ">
                <td className=" border-b-0 text-left border-r-2 border-r-gris w-1/5">
                  <h1>01 Feb 2023</h1>
                  <p className="text-gris">9:00 AM</p>
                </td>
                <td className="border-b-0  text-center border-r-2 w-1/5 border-r-gris">
                  {' '}
                  <p className="text-gris font-medium">Type</p>
                  <h1>Consultation</h1>
                </td>
                <td className="border-b-0  text-center border-r-2 w-1/5 border-r-gris">
                  <p className="text-gris font-medium">Doctor</p>
                  <h1>Consultation</h1>
                </td>
                <td className="border-b-0  text-center border-r-2  w-1/5 border-r-gris">
                  <p className="text-gris font-medium">Nurse</p>
                  <h1>Consultation</h1>
                </td>
                <td className="border-b-0  flex items-center justify-center  w-1/5 cursor-pointer text-primaryBlue font-semibold">
                  {' '}
                  <BiJournalText size={22} className="mr-2" />
                  Notes
                </td>
              </table>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Appoint;
