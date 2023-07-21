import express, { text } from 'express';
import morgan from 'morgan';
import ViteExpress from 'vite-express';

const app = express()

const port = 5173
let myId = 3

app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))
app.use(express.json())

ViteExpress.config({printViteDevServerHost: true})

const TEST_DATA = 
[
    { id: 0, name: 'Squirtle', imageUrl: 'https://static.pokemonpets.com/images/monsters-images-300-300/7-Squirtle.webp', health: 150, move1: 'Bite', move2: 'Aqua Jet', move3: 'Water Gun', move4: 'Snore'},

    { id: 1, name: 'Charizard', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/1f/Pok%C3%A9mon_Charizard_art.png', health: 200, move1: 'Flamethrower', move2: 'Focus Blast', move3: 'Solar Beam', move4: 'Roost'},

    { id: 2, name: 'Alakazam', imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png', health: 250, move1: 'Psychic', move2: 'Focus Blast', move3: 'Recover', move4: 'Shadow Ball'}
]

// routes

app.get('/api/pokemons', (req, res) => 
{
    res.json(TEST_DATA)
})

app.post('/api/pokemon', (req, res) => 
{
    const newPokemon = 
    {
        id: myId, 
        name: '',
        imgUrl: '',
        health: 0,
        move1: '',
        move2: '',
        move3: '',
        move4: '',
        isEditing: true
    }

    TEST_DATA.push(newPokemon)

    myId += 1

    res.json(newPokemon)
})

app.post('/api/pokemon/delete/:id', (req, res) =>
{
    const {id} = req.params

    const index = TEST_DATA.findIndex((e) => e.id === +id)

    if (index === -1)
    {
        res.status(404).json({error: `Item with ID ${id} was not found`})
    }
    else
    {
        TEST_DATA.splice(index, 1)

        res.json({id: +id})
    }
})

app.post('/api/pokemon/:id', (req, res) => 
{
    const {id} = req.params
    const {name, imgUrl, health, move1, move2, move3, move4} = req.body

    const index = TEST_DATA.findIndex((e) => e.id === +id)

    const item = TEST_DATA[index]

    if (name)
    {
        item.name = name ?? item.name
    }

    if (imgUrl)
    {
        item.imgUrl = imgUrl ?? item.imgUrl
    }

    if (+health)
    {
        item.health = +health ?? item.health
    }

    if (move1)
    {
        item.move1 = move1 ?? item.move1
    }

    if (move2)
    {
        item.move2 = move2 ?? item.move2
    }

    if (move3)
    {
        item.move3 = move3 ?? item.move3
    }

    if (move4)
    {
        item.move4 = move4 ?? item.move4
    }

    res.json(item)
})




ViteExpress.listen(app, port, () => console.log('running'))
