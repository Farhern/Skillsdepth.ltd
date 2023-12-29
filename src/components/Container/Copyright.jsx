import React from 'react';

const Copyright = () => {
  return (
    <footer className="flex justify-center items-center py-4 text-black text-md border-t border-gray-800">
      <span className="flex items-center">
        SKILLSEDGE &copy; {new Date().getFullYear()}.
        <span className="ml-2 font-normal">
          Project from Kamsos. All Rights Reserved.
        </span>
      </span>
    </footer>
  );
};

export default Copyright;

