'use client'
import SearchBar from './queryBar'
import FlightInformation from './searchEngine'
import SearchFlights from './searchEngine'
import { useState } from 'react'

function QueryPage() {
  const [query, setQuery] = useState('')
  return (
    <div className="FlightQuery">
      <SearchBar updateQuery={setQuery}></SearchBar>
      <SearchFlights queryString={query}></SearchFlights>
    </div>
  )
}
export default QueryPage
