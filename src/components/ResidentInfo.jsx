import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const ResidentInfo = ({ resident }) => {

  const [character, setCharacter] = useState()

  useEffect(() => {
    if(character == undefined) {
      axios.get(resident)
        .then(res => setCharacter(res.data))
        .catch(err => console.log(err))
    }
  }, [])


  return (
    <article className="card">
      <div className="image__container">
        <img src={character?.image} alt="Character_Image" className="image" />
      </div>
      <div className="info">
      <ul className="items__container">
        <li><span className="title"><h1>{character?.name}</h1></span></li>
        <li><span className="items">{character?.status}</span><span className={`status ${character?.status}`}></span></li>
        <li><span className="items">Species: </span>{character?.species}</li>
        <li><span className="items">Gender: </span>{character?.gender}</li>
        <li><span className="items">Origin: </span>{character?.origin.name}</li>
        <li><span className="items">Number of episodes: </span>{character?.episode.length}</li>
      </ul>
      </div>
    </article>
  )
}

export default ResidentInfo