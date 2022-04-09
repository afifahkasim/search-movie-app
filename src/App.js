import React, { useState } from 'react'
import axios from 'axios'

import Search from './components/Search'
import Results from './components/Results'
import Popup from './components/Popup'

function App() {
  const [state, setState] = useState({
    searchValue: "",
    results: [],
    selected: {}
  });

  // Parameter s to search for movie title
  const search = (e) => {
    if (e.key === "Enter") {
      axios(`http://www.omdbapi.com/?s=${state.searchValue}&apikey=383fec80`).then(({ data }) => {
        let results = data.Search;

        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }
  }
  
  const handleInput = (e) => {
    let searchValue = e.target.value;

    setState(prevState => {
      return { ...prevState, searchValue: searchValue }
    });
  }

  // Parameter i to get movie details based on imdbID from search result
  const openPopup = id => {
    axios(`http://www.omdbapi.com/?i=${id}&apikey=383fec80`).then(({ data }) => {
      let result = data;

      console.log(result);

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }

  return (
    <div className="App">
      <header>
        <h1>Movie Details</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />

        <Results results={state.results} openPopup={openPopup} />

        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
      </main>
    </div>
  );
}

export default App
