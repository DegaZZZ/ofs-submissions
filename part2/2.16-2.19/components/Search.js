const Search = ({ searchTerm, handleSearch }) => {
  return (
    <div>
      find countries <input value={searchTerm} onChange={handleSearch} />
    </div>
  )
}

export default Search
