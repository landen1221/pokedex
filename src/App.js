import logo from './logo.svg';
import './App.css';
import Pokemon from './Pokemon'
import PokemonCard from './PokemonCard'

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      {Pokemon.map(mon => (
        <PokemonCard pokemonID={mon.id} name={mon.name} type={mon.type} baseEq={mon.base_experience}   />
      ))}
      
    </div>
  );
}

export default App;
