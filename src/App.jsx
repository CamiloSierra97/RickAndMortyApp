import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Location from './components/Location'
import NewLocation from './components/NewLocation'
import NewResidentInfo from './components/NewResidentInfo'
import ResidentInfo from './components/ResidentInfo'
import useData from './hooks/useData'

function App() {

  const { data } = useData()
  const [locationId, setLocationId] = useState()
  const [newLocation, setNewLocation] = useState()

  let placeholder = 'Type a location ID'

  const location = e => {
    e.preventDefault()
    if (e > 126 && e <= 0) {
      placeholder = 'Type a valid number'
    } else {
      setLocationId(e.target.children[0].value)
    }
  }


  useEffect(() => {
    if (locationId !== undefined) {
      const URL = `https://rickandmortyapi.com/api/location/${locationId}`
      axios.get(URL)
        .then(res => setNewLocation(res.data))
    }
  }, [locationId])


  return (
    <div className="App">
      <div className="header__container">
      </div>
      <main className="presentation__container">
        <h1 className="presentation">
          Welcome to Rick and Morty App!
        </h1>
        <p>Enter a location ID between 1 and 126</p>
        <form className="input" onSubmit={location}>
          <input type="number" placeholder={placeholder} />
          <button className="search"><i className='bx bx-search-alt-2' ></i></button>
        </form>
      </main>
      {
        newLocation

          ?

          <NewLocation newLocation={newLocation} />

          :

          <Location data={data} />

      }
      <div className="global">
        <div className="character__container">
          {
            newLocation

              ?

              newLocation?.residents.map(newResident => (
                <NewResidentInfo newResident={newResident} key={newResident}/>
              ))
              
              :
              
              data?.data.residents.map(resident => (
                <ResidentInfo resident={resident} key={resident} />
              ))
              
          }
        </div>
      </div>
    </div>
  )
}

export default App
