import React from "react";

function NewLocation({ newLocation, totalPages, prevPage, nextPage }) {
  return (
    <main className="location">
      <section className="location__container">
        <h1>{newLocation?.name}</h1>
        <ul className="location__data">
          <li className="items">
            <span className="title">Dimension: </span>
            <span></span>
            {newLocation?.dimension}
          </li>
          <li className="items">
            <span className="title">Type: </span>
            {newLocation?.type}
          </li>
          <li className="items">
            <span className="title">Residents: </span>
            {newLocation?.residents?.length}
          </li>
        </ul>
      </section>
      <p>{totalPages}</p>
      <button onClick={prevPage}>Prev</button>
      <button onClick={nextPage}>Next</button>
    </main>
  );
}

export default NewLocation;
