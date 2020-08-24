import React from 'react';

const SoftwarePackage = ({name, version}) => {
  return (
    <div className="rounded overflow-hidden shadow-lg p-6">
      <div className="grid grid-cols-4 mb-6">
        <div className="font-bold text-lg col-span-2">{name}</div>
        <div className="flex justify-end col-span-2">
          <span className="text-base text-gray-700">v{version}</span> 
        </div>
      </div>
      <div className="mb-6">
        <img className="m-auto"
            src={`/static/package.png`}
            alt={`${name}, version ${version}`}
        />
      </div>
    </div>
  );
}
 
export default SoftwarePackage;