import React from 'react';

function Appoint() {
  return (
    <div className="h-96 w-full bg-white relative rounded-3xl">
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
              key={index} // Issue: Index should not be used as key if possible
              className="py-2.5 ml-5 h-20 bg-white mb-9 rounded-3xl"
            >
              <table className="">
                <tbody> {/* Added tbody */}
                  <tr>
                    <td className=" border-b-0 text-left border-r-2 border-r-gris w-1/5">
                      <h1>01 Feb 2023</h1>
                      <p className="text-gris">9:00 AM</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b-0  text-center border-r-2 w-1/5 border-r-gris">
                      <p className="text-gris font-medium">Type</p>
                      <h1>Consultation</h1>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b-0  text-center border-r-2 w-1/5 border-r-gris">
                      <p className="text-gris font-medium">Doctor</p>
                      <h1>Consultation</h1>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b-0  text-center border-r-2  w-1/5 border-r-gris">
                      <p className="text-gris font-medium">Nurse</p>
                      <h1>Consultation</h1>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b-0  flex items-center justify-center  w-1/5 cursor-pointer text-primaryBlue font-semibold">
                      {' '}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="currentColor"
                        className="bi bi-journal-text mr-2"
                        viewBox="0 0 22 22"
                      >
                        <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
                        <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
                      </svg>
                      Notes
                    </td>
                  </tr>
                </tbody>
              </table>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Appoint;
