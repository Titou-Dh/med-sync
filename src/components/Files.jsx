import React from 'react';
import { BiFileEarmarkPlus, BiFileEarmarkText } from 'react-icons/bi';

function Files() {
  return (
    <div className="bg-white w-80 h-96 rounded-3xl p-3">
      <div className="flex flex-row items-center relative">
        <p className="ml-10 font-bold">Files/Docs</p>
        <a
          className="text-primaryBlue cursor-pointer absolute right-0 mr-10 font-bold flex flex-row items-center"
          href="#"
        >
          <BiFileEarmarkPlus size={20} className="mx-1" />
          Add file
        </a>
      </div>
      <div className="text-center m-auto h-64">
        <div className="w-86 bg-white h-1/4 flex items-center relative p-2 rounded-xl shadow-lg mt-6 cursor-pointer">
          <BiFileEarmarkText size={20} className="mx-3" />
          <p className="ml-1">Blood test.pdf</p>
          <p className="absolute right-0 mr-4">28kb</p>
        </div>
        <div className="w-86 bg-white h-1/4 flex items-center relative p-2 rounded-xl shadow-lg mt-4 cursor-pointer">
          <BiFileEarmarkText size={20} className="mx-3" />
          <p className="ml-1">Blood test.pdf</p>
          <p className="absolute right-0 mr-4">28kb</p>
        </div>
        <div className="w-86 bg-white h-1/4 flex items-center relative p-2 rounded-xl shadow-lg mt-4 cursor-pointer">
          <BiFileEarmarkText size={20} className="mx-3" />
          <p className="ml-1">Blood test.pdf</p>
          <p className="absolute right-0 mr-4">28kb</p>
        </div>
        <div className="w-86 bg-white h-1/4 flex items-center relative p-2 rounded-xl shadow-lg mt-4 cursor-pointer">
          <BiFileEarmarkText size={20} className="mx-3" />
          <p className="ml-1">Blood test.pdf</p>
          <p className="absolute right-0 mr-4">28kb</p>
        </div>
      </div>
    </div>
  );
}

export default Files;
