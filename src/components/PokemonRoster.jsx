import './PokemonRoster.css'

import PokemonRosterHeader from './PokemonRosterHeader'

import PokemonRosterCard from './PokemonRosterCard'

import EditableNameCell from './EditableNameCell'
import EditableImageCell from './EditableImageCell'
import EditableHealthCell from './EditableHealthCell'
import EditableMovesCell from './EditableMovesCell'

import SubmitAndEditButtons from './SubmitAndEditButtons'

import PokemonAddButton from './PokemonAddButton'
import React, { useState } from 'react'
import axios from 'axios'


let maxPokemon = 3

const PokemonRoster = (({initialPokemon}) => 
{  

    const [pokemonList, setPokemonList] = useState(initialPokemon)

    const addPokemon = async () =>
    {
        if (maxPokemon !== 6)
        {
            const {data} = await axios.post('/api/pokemon')

            console.log(data)
    
            const newPokemon = {...data}
    
            setPokemonList([...pokemonList, newPokemon])
    
            maxPokemon += 1
        }
    }


    //here 
    const deletePokemon = async (id) => 
    {
        const {data} = await axios.post(`api/pokemon/delete/${id}`)

        if (!data.error)
        {
            const newPokemonList = [...pokemonList]

            const index = newPokemonList.findIndex((pokemon) => pokemon.id === id)

            newPokemonList.splice(index, 1)

            setPokemonList(newPokemonList)
        }
    }
    // here

    const cards = pokemonList.map((pokemon) =>
    {
        const {name, imageUrl, health, move1, move2, move3, move4, id, isEditing} = pokemon

        return (
            <PokemonRosterCard
                initialPokemonData={{name, imageUrl, health, move1, move2, move3, move4, id, isEditing}}
                key={id}
                onDeleteClick={() => deletePokemon(id)}
            />
        )
    })
    console.log(pokemonList)

    return (
        <>
        <div>
            <PokemonRosterHeader/>
        </div>
        <div className="roster">
            {cards}
            
            <PokemonAddButton onAddClick={addPokemon}/>
        </div>
        </>
    )
})

export default PokemonRoster