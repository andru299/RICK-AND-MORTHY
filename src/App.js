import imageRickMorty from "./img/rick-morty.jpeg";
import './App.css';
import { useState } from "react";
import Characters from "./components/Characters";

function App() {
  const [characters, setCharacters] = useState(null);
  const [location, setLocation] = useState(null);
  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const api2 = await fetch ('https://rickandmortyapi.com/api/location');
    const locationApi = await api2.json();
    const characterApi = await api.json();
    //console.log(characterApi);
    setCharacters(characterApi.results);
    setLocation(locationApi.results);
  };
  //console.log(characters);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} location={location} />
        ) : (
          <>
            <img src={imageRickMorty} alt="Rick & Morty" className='img-home' />
            <button onClick={reqApi} className="btn-search">Buscar personaje</button>
          </>
        )}


      </header>
    </div>
  );
}

export default App;
