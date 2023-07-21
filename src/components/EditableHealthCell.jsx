import './PokemonRoster.css'

const EditableHealthCell = (({health, isEditing, onValueChange}) => 
{
    return isEditing ? (
        <div>
            <input type="text" value={health} onChange={(e) => onValueChange(e.target.value)} />
        </div>
    ) : (
        <div>
            <h1 className="health">{health}</h1>
        </div>
    )
})

export default EditableHealthCell