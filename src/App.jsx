import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Location from "./components/Location";
import NewLocation from "./components/NewLocation";
import NewResidentInfo from "./components/NewResidentInfo";
import ResidentInfo from "./components/ResidentInfo";
import useData from "./hooks/useData";

function App() {
  const { data } = useData();
  const [placeholder, setPlaceholder] = useState("Type a location ID");
  const [locationId, setLocationId] = useState();
  const [newLocation, setNewLocation] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [offset, setOffset] = useState(0);
  const [pageData, setPageData] = useState();

  useEffect(() => {
    setPlaceholder("Type a location ID");
    setCurrentPage(1);
    setOffset(0);
    if (locationId !== undefined) {
      const URL = `https://rickandmortyapi.com/api/location/${locationId}`;
      axios
        .get(URL)
        .then((res) => setNewLocation(res.data))
        .catch((err) => console.log(err));
    }
    setPageData(newLocation?.residents.slice(offset, 10));
    // console.log(pageData)
  }, [locationId]);

  useEffect(() => {
    setTotalPages(Math.ceil(newLocation?.residents.length / 10));
    setPageData(newLocation?.residents.slice(offset, 10));
    // console.log(arrayPage)
  }, [newLocation, currentPage]);

  const location = (e) => {
    e.preventDefault();
    if (e.target.children[0].value <= 126 && e.target.children[0].value > 0) {
      setLocationId(e.target.children[0].value);
      e.target.children[0].value = "";
    } else {
      e.target.children[0].value = "";
      setPlaceholder("Type a valid number");
    }
  };

  const prevPage = () => {
    if (currentPage != 1 && offset >= 9) {
      setCurrentPage(currentPage - 1);
      setOffset(offset - 10);
      setPageData(newLocation?.residents.slice(offset - 10, 9));
    }
  };

  const nextPage = () => {
    console.log(offset)
    console.log(newLocation?.residents.slice(offset, 10));
    if (offset + 10 < newLocation.residents.length) {
      setOffset(offset + 10);
      setCurrentPage(currentPage + 1);
      console.log(newLocation);
    }
  };

  return (
    <div className="App">
      <div className="header__container"></div>
      <main className="presentation__container">
        <h1 className="presentation">Welcome to Rick and Morty App!</h1>
        <p>Enter a location ID between 1 and 126</p>
        <form className="input" onSubmit={location}>
          <input type="number" placeholder={placeholder} />
          <button className="search">
            <i className="bx bx-search-alt-2"></i>
          </button>
          <p>{currentPage}</p>
          <p>{offset}</p>
        </form>
      </main>
      {newLocation ? (
        <NewLocation
          newLocation={newLocation}
          totalPages={totalPages}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      ) : (
        <Location data={data} />
      )}
      <div className="global">
        <div className="character__container">
          {newLocation
            ? newLocation?.residents.map((newResident) => (
                <NewResidentInfo newResident={newResident} key={newResident} />
              ))
            : data?.data.residents.map((resident) => (
                <ResidentInfo resident={resident} key={resident} />
              ))}
        </div>
      </div>
    </div>
  );
}

export default App;
