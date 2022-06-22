import React from 'react'
import { ISearchProps } from './types'
import { SearchIcon } from '../icons'

const Search = ({ onChange }: ISearchProps) => {
  return (
    <div className={`w-full mx-auto bg-black-emphasis`}>
      <label className="relative bg-black-emphasis">
        <span className="sr-only">Search</span>
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-gray-100 w-full border border-gray-80 py-2 pr-9 pl-3 shadow-sm focus:outline-none focus:border-gray-50 focus:ring-gray-50 focus:ring-1 sm:text-sm"
          placeholder="Search for anything..."
          type="text"
          name="search"
          onChange={(e) => onChange(e.target.value, 20)}
        />
        <span className="absolute inset-y-0 right-0 flex items-center px-5 bg-white-disabled">
          <SearchIcon
            strokeColor="text-white-emphasis"
            className="text-white-emphasis"
          />
        </span>
      </label>
    </div>
  )
}

export default Search
