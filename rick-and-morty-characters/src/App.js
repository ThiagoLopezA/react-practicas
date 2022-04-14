import "./assets/App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

/*##### Components #####*/
import CharacterList from "./components/CharacterList";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState();
  const [pagDisplay, setPagDisplay] = useState(false);

  const indexUrl = "https://rickandmortyapi.com/api/character";
  const getCharacters = url => {
    axios
      .get(url)
      .then(data => {
        setCharacters(data.data.results);
        setLoading(false);
        setInfo(data.data.info);
        setPagDisplay(true);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => getCharacters(indexUrl), []);

  const onNext = () => {
    getCharacters(info.next);
  };

  const onPrev = () => {
    getCharacters(info.prev);
  };

  let spinner = (
    <div className="d-flex justify-content-center align-items-center spinner-wrapper">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <Navbar />
      {pagDisplay ? (
        <Pagination
          onNext={onNext}
          onPrev={onPrev}
          next={info.next}
          prev={info.prev}
        />
      ) : null}
      {loading ? spinner : <CharacterList characters={characters} />}
    </React.Fragment>
  );
}

export default App;
