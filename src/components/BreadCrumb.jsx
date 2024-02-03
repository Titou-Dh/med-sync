// Breadcrumb.js
import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ items }) => {
  <nav className="flex" aria-label="Breadcrumb">
    {items.map((item, index) => (
      <React.Fragment key={index}>
        {index > 0 && (
          <svg
            className="flex-shrink-0 w-4 h-4 mx-2 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6 3a1 1 0 0 1 0 2h8a1 1 0 0 1 0 2H8.707l2.147 2.146a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 1.414L8.707 7H14a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"
              clipRule="evenodd"
            />
          </svg>
        )}
        <span className="text-gray-500">
          {index < items.length - 1 ? (
            <Link to={item.to} className="text-blue-500">
              {item.label}
            </Link>
          ) : (
            item.label
          )}
        </span>
      </React.Fragment>
    ))}
  </nav>;
};

export default Breadcrumb;
