import axios from 'axios'
import React, { useEffect, useState } from 'react'

const NewResidentInfo = ({ newResident }) => {

    const [newCharacter, setNewCharacter] = useState()
    console.log(newResident)

    useEffect(() => {
        if (newCharacter == undefined) {
            axios.get(newResident)
                .then(res => setNewCharacter(res.data))
                .catch(err => console.log(err))
        }
    }, [])
    console.log(newCharacter)

    return (
        <article className="card">
            <div className="image__container">
                <img src={newCharacter?.image} alt="Character_Image" className="image" />
            </div>
            <div className="info">
                <ul className="items__container">
                    <li><span className="title"><h1>{newCharacter?.name}</h1></span></li>
                    <li><span className="items">Species: </span>{newCharacter?.origin.name}</li>
                    <li><span className="items">Gender: </span>{newCharacter?.gender}</li>
                    <li><span className="items">Status: </span>{newCharacter?.status}</li><span className="status"></span>
                    <li><span className="items">Origin: </span>{newCharacter?.origin.name}</li>
                    <li><span className="items">Number of episodes: </span>{newCharacter?.episode.length}</li>
                </ul>
            </div>
        </article>
    )
}

export default NewResidentInfo