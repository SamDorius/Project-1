import './PokemonRoster.css'

const EditableNameCell = (({name, isEditing, onValueChange}) => 
{
    return isEditing ? (
        <div>
            <input type="text" value={name} onChange={(e) => onValueChange(e.target.value)} />
        </div>
    ) : (
        <div>
            <h1>{name}</h1>
        </div>
    )
})

export default EditableNameCell