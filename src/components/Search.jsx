import React from 'react';

const Search = ({ search, setSearch, handleSearch }) => {
    return (
        <div className="search flex justify-center gap-4">
            <input
                type="text"
                name="search"
                placeholder="Enter city name"
                className="search-input border-0 border-b-2 border-green-600 outline-0 text-xl w-80 text-gray-900"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div
                onClick={handleSearch}
                className="flex items-center px-4 py-2 text-xl rounded-md bg-indigo-400 hover:bg-indigo-500 text-white transition duration-150 cursor-pointer"
            >
                Search
            </div>
        </div>
    );
};

export default Search;
