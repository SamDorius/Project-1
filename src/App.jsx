
import './App.css'

import PokemonRoster from './components/PokemonRoster'


function App({initialPokemonList}) {

  return (
    <PokemonRoster initialPokemon={initialPokemonList}/>
  )
}

export default App
