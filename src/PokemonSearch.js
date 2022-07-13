import React from 'react';
import { useState, useEffect } from 'react';
import { getPokemon } from './services/fetch-utils';
import PokemonList from './PokemonList';

export default function PokemonSearch() {
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
    <div><div className="pokemon-search">
      <form onSubmit={handleSubmit}>
        <input onChange={e => setPokemonQuery(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
    <PokemonList pokemon={pokemon}/>
    </div>
  );
}
