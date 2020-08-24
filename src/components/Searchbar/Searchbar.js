import React from 'react';

const Searchbar = ({searchQuery, setSearchQuery}) => {
  return (
    <div className="mb-6">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="searchbar"
        type="text"
        placeholder="Search by version"
        value={searchQuery}
        onChange={(e) => {setSearchQuery(e.target.value)}}
      />
    </div>
  )
}

export default Searchbar;