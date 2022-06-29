import './App.css';
import { getPokemon, getYelp } from './services/fetch-utils.js';
import { useState, useEffect } from 'react';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonQuery, setPokemonQuery] = useState([]);
  const [businesses, setBusinesses] = useState([]);
  const [yelpQuery, setYelpQuery] = useState([]);
  
  useEffect(() => {
    fetchAndStorePoke();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchAndStorePoke() {
    const data = await getPokemon(pokemonQuery);
    setPokemon(data.results);
  }
  async function fetchAndStoreYelp() {
    const data = await getYelp(yelpQuery);
    setBusinesses(data.businesses);
  }
 
  async function handleSubmit(e) {
    e.preventDefault();
    await fetchAndStorePoke();
    setPokemonQuery('');
  
  }
  async function handleYelpSubmit(e) {
    e.preventDefault();
    await fetchAndStoreYelp();
    setYelpQuery('');
  
  }


  return (
    <div className='App'>
      <div className="pokemon-search">
        <form onSubmit={handleSubmit}>
          <input onChange={e => setPokemonQuery(e.target.value)} />
          <button>Search</button>
        </form>
        {pokemon.map((poke, i) => <div key={poke.pokemon + i}>
          <p>{poke.pokemon}</p>
          <img src={poke.url_image}/>
        </div>)}
     
      </div>
      <div className="yelp-search">
        <form onSubmit={handleYelpSubmit}>
          <input onChange={e => setYelpQuery(e.target.value)} />
          <button>Search</button>
        </form>
        {businesses.map((business, i) => <div key={business.name + i}>
          <p>{business.name}</p>
         
        </div>)}

      </div>
    </div>
  );
}

export default App;
