import React from 'react'

function Location({ data }) {

  return (
    <main className="location">
      <section className="location__container">
        <h1>{data?.data.name}</h1>
        <ul className="location__data">
          <li className="items"><span className="title">Dimension: </span>{data?.data.dimension}</li>
          <li className="items"><span className="title">Type: </span>{data?.data.type}</li>
          <li className="items"><span className="title">Residents: </span>{data?.data.residents.length}</li>
        </ul>
      </section>
    </main>
  )
}

export default Location