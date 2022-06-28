import './App.css';
import { getPokemon } from './services/fetch-utils.js';
import { useState, useEffect } from 'react';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonQuery, setPokemonQuery] = useState([]);
  
  useEffect(() => {
    fetchAndStorePoke();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchAndStorePoke() {
    const data = await getPokemon(pokemonQuery);
    setPokemon(data.results);
  }
 


  async function handleSubmit(e) {
    e.preventDefault();
    await fetchAndStorePoke();
    setPokemonQuery('');
  
  }
  

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input onChange={e => setPokemonQuery(e.target.value)} />
        <button>Search</button>
      </form>
      
      {pokemon.map((poke, i) => <div key={poke.pokemon + i}>
        <p>{poke.pokemon}</p>
        <img src={poke.url_image}/>
      </div>)}
     
    </div>
  );
}

export default App;
