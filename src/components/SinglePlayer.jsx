import { useContext, useEffect, useState } from "react"
import { PlayerContext } from "../playerContext"
import { Link, useParams } from "react-router-dom"

function SinglePlayer() {
  const {id} = useParams()
    const {newPlayer, deletePlayer, getSinglePlayer} = useContext(PlayerContext)
    const [deleted, setDeleted] = useState(false)

  useEffect(()=>{
      if(!newPlayer){
        getSinglePlayer(id)
      }
  },[])


    return (
      <>
      <div className = "singlePlayer">
        {
          newPlayer ?
          <>
          <h2>{newPlayer.name}</h2>
          <p>Breed : {newPlayer.breed}</p>
          <p>Allowed to play : {newPlayer.status === "field" ?"true":"false"}</p>
          <img src= {newPlayer.imageUrl} alt = {`a picture of a ${newPlayer.breed}`}/>
          <p>Team : {newPlayer.team.name === "Ruff" ?"Ruff Ryders":"Fluffy Fighters"} </p>
          <button onClick={()=>{
            setDeleted(true)
            deletePlayer(newPlayer.id)
            }}>Delete me</button>
          </>
          :
          <p>Loading!</p>
        }
      </div>
      {
        deleted &&
        <div class="popUp"> 
          <p>Your player was deleted</p>
          <Link to ="/allplayers">View All Players</Link>
          <p>Or</p>
          <Link to ="/addplayer">Add A New Player</Link>
        </div>
      }
  
      </>
    )
  }
  
  export default SinglePlayer