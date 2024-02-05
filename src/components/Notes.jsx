import React from 'react';

function Notes() {
  return (
    <div className="bg-white w-80 h-96 rounded-3xl p-3">
      <div className="flex flex-row	items-center relative">
        <p className="ml-10 font-bold">Notes</p>
        <a
          className="text-primaryBlue cursor-pointer absolute right-0 mr-10 font-bold"
          href="#"
        >
          See all
        </a>
      </div>
      <div className="text-center relative">
        <textarea
          className="bg-softBlue w-5/6 h-72 mt-6 rounded-3xl resize-none p-3"
          id="notes"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </textarea>
        <button
          className="rounded-lg bg-primaryBlue p-2 text-white hover:bg-sky-700 absolute right-10 bottom-6  "
          id="save-note"
        >
          Save note
        </button>
      </div>
    </div>
  );
}

export default Notes;
