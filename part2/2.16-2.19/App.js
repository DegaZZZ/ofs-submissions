import { useState } from 'react'
import Search from './components/Search'
import Countries from './components/Countries'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div>
      <Search searchTerm={searchTerm} handleSearch={handleSearch} />
      <Countries filter={searchTerm} />
    </div>
  )
}

export default App
