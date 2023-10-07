import React from "react";

const List = ({ token }) => {
  return (
    <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      {token.map((item, index) => (
        <li
          key={index}
          className={`w-full px-4 py-2 ${
            index === 0 ? "rounded-t-lg" : ""
          } border-b border-gray-200 ${
            index === token.length - 1 ? "rounded-b-lg" : ""
          } dark:border-gray-600`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default List;
