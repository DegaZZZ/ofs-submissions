const ShowButton = ({ country, setCountryToShow }) => {
    return (
      <button onClick={() => setCountryToShow(country)}>show</button>
    )
  }
  
  export default ShowButton
  