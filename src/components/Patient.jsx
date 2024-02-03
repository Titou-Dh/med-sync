import React from "react";

const Breadcrumb = ({ items }) => {
  return (
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
          <span className="text-gray-500">{item}</span>
        </React.Fragment>
      ))}
    </nav>
  );
};

const YourComponent = () => {
  const breadcrumbItems = ["Home", "Category", "Subcategory", "Page"];

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />
      {/* Your component content goes here */}
    </div>
  );
};
