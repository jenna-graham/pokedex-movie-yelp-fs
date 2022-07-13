import './App.css';

import PokemonSearch from './PokemonSearch';
import BusinessSearch from './BusinessSearch';

function App() {


  return (
    <div className='App'>
      <div>
        <PokemonSearch />
      </div>
      <div>
        <BusinessSearch />
      </div>
      
    </div>
  );
}

export default App;
