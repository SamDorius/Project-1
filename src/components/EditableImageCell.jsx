import './PokemonRoster.css'

const EditableImageCell = (({imgUrl, isEditing, onValueChange}) => 
{
    return isEditing ? (
        <div>
            <input type="text" value={imgUrl} onChange={(e) => onValueChange(e.target.value)} />
        </div>
    ) : (
        <div>
            <img src={imgUrl}/>
        </div>
    )
})

export default EditableImageCell