import React, { useEffect, useState } from 'react'
const PlayerContext = React.createContext()
import axios from'axios'
//context provider
function PlayerProvider(props){
    const URL = "https://fsa-puppy-bowl.herokuapp.com/api/danielleW/players/"
    const teamURL = "https://fsa-puppy-bowl.herokuapp.com/api/danielleW/teams/"
    const test = "I am a test value"
    const [teams, setTeams] = useState([])
    const [ruffRyders, setRuffRyders] = useState([])
    const [fluffyFighters, setFluffyFighters] = useState([])
    const [benchedPlayers, setbenchedPlayers] = useState([])
    const [players, setPlayers] = useState([])
    const [player, setPlayer] = useState(false)
    //const [newPlayer, setNewPlayer] = useState(false)

    useEffect(()=>{
        const getAllPlayers = async()=>{
            const response = await axios(URL)
            setPlayers(response.data.data.players)
            setbenchedPlayers(response.data.data.players.filter(player=>player.teamId === 194 || player.teamId === 193))
        }
        const getTeams = async()=>{
            const response = await axios(teamURL)
            console.log(response.data.data.teams)
            setTeams(response.data.data.teams)
            setRuffRyders(response.data.data.teams[0].players)
            setFluffyFighters(response.data.data.teams[1].players)
        }
        if(ruffRyders.length <=0 && fluffyFighters<=0){
            getTeams()
        }
        if(players.length<=0){
            getAllPlayers()
        }
    },[players])

    const getSinglePlayer = async(id)=>{
        const response = await axios(`${URL}/${id}`)
        console.log(response.data.data.player)
        setPlayer(response.data.data.player)
    }
    const deletePlayer = async(id)=>{
        const response = await axios.delete(`${URL}/${id}`)
        setPlayers([])
    }
    const addNewPlayer = async(player)=>{
        try {
            const response = await axios.post(URL, player)
            setPlayer(response.data.data.newPlayer)
            console.log(response.data.data.newPlayer)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <PlayerContext.Provider value={{players, newPlayer:player, benchedPlayers, getSinglePlayer, deletePlayer, addNewPlayer, setPlayer, teams,  ruffRyders, fluffyFighters}}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export {PlayerContext, PlayerProvider}
