import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";

const NewResidentInfo = ({ newResident }) => {
  const [newCharacter, setNewCharacter] = useState();

  useEffect(() => {
    if (newCharacter == undefined) {
      axios
        .get(newResident)
        .then((res) => setNewCharacter(res.data))
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <article className="card">
      {newCharacter ? (
        <>
          <div className="image__container">
            <img
              src={newCharacter?.image}
              alt="Character_Image"
              className="image"
            />
          </div>
          <div className="info">
            <ul className="items__container">
              <li>
                <span className="title">
                  <h1>{newCharacter?.name}</h1>
                </span>
              </li>
              <li>
                <span className="items">{newCharacter?.status}</span>
                <span className={`status ${newCharacter?.status}`}></span>
              </li>
              <li>
                <span className="items">Species: </span>
                {newCharacter?.species}
              </li>
              <li>
                <span className="items">Gender: </span>
                {newCharacter?.gender}
              </li>
              <li>
                <span className="items">Origin: </span>
                {newCharacter?.origin.name}
              </li>
              <li>
                <span className="items">Number of episodes: </span>
                {newCharacter?.episode.length}
              </li>
            </ul>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </article>
  );
};

export default NewResidentInfo;
