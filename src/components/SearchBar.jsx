import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => (
  <div className="relative block w-80">
    <input
      type="text"
      name="email"
      className="mt-1 px-9 py-5  h-full bg-white  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
      placeholder="Search"
    />
    <span className="absolute right-2 top-3  text-violet-100 bg-blue-500 p-2 w-10 rounded-xl flex items-center justify-center h-10">
      <FontAwesomeIcon icon={faSearch} />
    </span>
  </div>
);

export default SearchBar;
