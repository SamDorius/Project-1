import './PokemonRoster.css'

import EditableNameCell from './EditableNameCell'
import EditableImageCell from './EditableImageCell'
import EditableHealthCell from './EditableHealthCell'
import EditableMovesCell from './EditableMovesCell'

import SubmitAndEditButtons from './SubmitAndEditButtons'
import React, { useState } from 'react'
import axios from 'axios'

const PokemonRosterCard = ({initialPokemonData, onDeleteClick}) => 
{

    const [isEditing, setIsEditing] = useState(initialPokemonData.isEditing)

    const [name, setName] = useState(initialPokemonData.name)
    const [imgUrl, setImg] = useState(initialPokemonData.imageUrl)
    const [health, setHealth] = useState(initialPokemonData.health)

    const [move1, setMove1] = useState(initialPokemonData.move1)
    const [move2, setMove2] = useState(initialPokemonData.move2)
    const [move3, setMove3] = useState(initialPokemonData.move3)
    const [move4, setMove4] = useState(initialPokemonData.move4)

    const setEditMode = () => setIsEditing(true)
    // here
    const setNormalMode = async () => 
    {
        console.log(initialPokemonData)
        const {data} = await axios.post(`/api/pokemon/${initialPokemonData.id}`,
        {
            name, imgUrl, health, move1, move2, move3, move4
        })

        if(!data.error)
        {
            setName(data.name)
            setImg(data.imgUrl)
            setHealth(data.health)

            setMove1(data.move1)
            setMove2(data.move2)
            setMove3(data.move3)
            setMove4(data.move4)
        }

        setIsEditing(false)
    }
    // here

    return (
        <div className="card">
            <EditableNameCell onValueChange={setName} isEditing={isEditing} name={name}/>
            <EditableImageCell onValueChange={setImg} isEditing={isEditing} imgUrl={imgUrl}/>
            <EditableHealthCell onValueChange={setHealth} isEditing={isEditing} health={health}/>
            <EditableMovesCell setMove1={setMove1} setMove2={setMove2} setMove3={setMove3} setMove4={setMove4} isEditing={isEditing} move1={move1} move2={move2} move3={move3} move4={move4}/>
            <SubmitAndEditButtons isEditing={isEditing} onEditClick={setEditMode} onSaveClick={setNormalMode} deleteClick={onDeleteClick} />
        </div>
    )
}

export default PokemonRosterCard