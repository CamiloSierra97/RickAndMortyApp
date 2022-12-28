import React, { useEffect, useState } from "react";

function Location({ data }) {
  
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const arrayPage = [];
    if (data?.data.residents.length > 10) {
      setTotalPages(Math.ceil(data.data.residents.length / 10));
      for (let i = 0; i < 10; i++) {
        arrayPage.push(data.data);
      }
      console.log(arrayPage);
    }
  }, [data]);

  return (
    <main className="location">
      <section className="location__container">
        <h1>{data?.data.name}</h1>
        <ul className="location__data">
          <li className="items">
            <span className="title">Dimension: </span>
            {data?.data.dimension}
          </li>
          <li className="items">
            <span className="title">Type: </span>
            {data?.data.type}
          </li>
          <li className="items">
            <span className="title">Residents: </span>
            {data?.data.residents.length}
          </li>
        </ul>
      </section>
      <ul className="pages"></ul>
    </main>
  );
}

export default Location;
