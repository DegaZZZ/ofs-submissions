import { useState, useEffect } from 'react'
import axios from 'axios'
import ShowButton from './ShowButton'
import CountryDetail from './CountryDetail'

const Countries = ({ filter }) => {
  const [countries, setCountries] = useState([])
  const [countryToShow, setCountryToShow] = useState(null)

  useEffect(() => {
    axios
      .get('https://restcountries.com/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  // Reset countryToShow when the filter changes
  useEffect(() => {
    setCountryToShow(null)
  }, [filter])

  const filteredCountries = filter
    ? countries.filter(country =>
        country.name.toLowerCase().includes(filter.toLowerCase())
      )
    : countries

  if (filteredCountries.length > 10) {
    return <p>Too many matches, specify another filter</p>
  } else if (filteredCountries.length === 1 || countryToShow) {
    const country = countryToShow || filteredCountries[0]
    return <CountryDetail country={country} />
  } else {
    return (
      <div>
        {filteredCountries.map(country =>
          <div key={country.name}>
            {country.name} <ShowButton country={country} setCountryToShow={setCountryToShow} />
          </div>
        )}
      </div>
    )
  }
}

export default Countries
