import './PokemonRoster.css'

//here
const EditableMovesCell = (({move1, move2, move3, move4, isEditing, setMove1, setMove2, setMove3, setMove4}) => 
{
    return isEditing ? (
        <div>
            <input type="text" value={move1} onChange={(e) => setMove1(e.target.value)}/>
            <input type="text" value={move2} onChange={(e) => setMove2(e.target.value)}/>
            <input type="text" value={move3} onChange={(e) => setMove3(e.target.value)}/>
            <input type="text" value={move4} onChange={(e) => setMove4(e.target.value)}/>
        </div>
        ) : (
        <div>
            <select name="moves" id="moves">
                <option value="move1">{move1}</option>
                <option value="move2">{move2}</option>
                <option value="move3">{move3}</option>
                <option value="move4">{move4}</option>
            </select>
        </div>
    )
})

export default EditableMovesCell