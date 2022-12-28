import axios from "axios";
import { useEffect, useState } from "react";

const useData = (randomLocation = Math.ceil(Math.random() * 126)) => {
  const [data, setData] = useState();

  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${randomLocation}`;
    axios
      .get(URL)
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  return { data };
};

export default useData;
