import React from 'react';

function Greeting({ name }) {
  return (
    <div className="mb-8 border-b-2 border-[#E38524] pb-4">
      <h1 className="text-3xl font-semibold text-gray-800 tracking-tight">
        Hi there, {name}
      </h1>
      <p className="text-gray-600 text-lg mt-2">What would you like to know?</p>
    </div>
  );
}

export default Greeting;