const CountryDetail = ({ country }) => {
    return (
      <div>
        <h1>{country.name}</h1>
        <p>capital {country.capital}</p>
        <p>population {country.population}</p>
        <h2>languages</h2>
        <ul>
          {country.languages.map(language =>
            <li key={language.iso639_1}>{language.name}</li>
          )}
        </ul>
        <img src={country.flags.svg} alt={`flag of ${country.name}`} height="100" />
      </div>
    )
  }
  
  export default CountryDetail
  