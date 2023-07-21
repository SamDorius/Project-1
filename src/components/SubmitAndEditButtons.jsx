import './PokemonRoster.css'

const SubmitAndEditButtons = ({isEditing, onEditClick, onSaveClick, deleteClick}) => 
{
    return isEditing ? (
        <div>
            <button className="edit" onClick={onSaveClick}>Save</button>
        </div>
    ) : (
        <div className="bottom">
            <button className="edit" onClick={onEditClick}>Edit</button>
            <button className="delete" onClick={deleteClick}>Delete</button>
        </div>
    )
}

export default SubmitAndEditButtons