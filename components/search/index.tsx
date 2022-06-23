import React from 'react'
import { ISearchProps } from './types'
import { SearchIcon } from '../icons'
import debounce from 'lodash.debounce'
import { useAppContext } from '../../pages/api/context'
import { API } from '../../pages/api/constant'

const Search = ({}: ISearchProps) => {
  const { updateResults, setLoading } = useAppContext()

  const handleChange = debounce(async (value, maxResults) => {
    setLoading(true)
    const url = `${API.YOUTUBE_SEARCH}search?key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&type=video&part=snippet&maxResults=${maxResults}&q=${value}`

    await fetch(url)
      .then((res) => res.json())
      .then((json) => {
        updateResults(json)
      })
    setLoading(false)
  }, 500)

  return (
    <div className="w-full mx-auto bg-black-emphasis">
      <label className="relative bg-black-emphasis group">
        <span className="sr-only">Search</span>
        <input
          className="placeholder:text-slate-400 block bg-gray-100 text-white-primary w-full border border-gray-80 py-2 pr-9 pl-3 shadow-sm focus:outline-none focus:border-gray-50 focus:ring-gray-50 focus:ring-1 sm:text-sm"
          placeholder="Search for anything..."
          type="text"
          name="search"
          onChange={(e) => handleChange(e.target.value, 20)}
        />
        <span className="absolute inset-y-0 right-0 flex items-center px-5 bg-gray-80">
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
