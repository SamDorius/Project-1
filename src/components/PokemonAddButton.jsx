import './PokemonRoster.css'

const PokemonAddButton = ({onAddClick}) => 
{
    return (
        <div className="card">
            <button onClick={onAddClick}>Add Pokemon</button>
        </div>
    )
}

export default PokemonAddButton