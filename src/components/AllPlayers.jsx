import { useContext, useState } from "react"
import { PlayerContext } from "../playerContext"
import { useNavigate } from "react-router-dom"
function AllPlayers() {
    const [classValue, setClassValue] = useState("")
    const [view, setView] = useState("benchedPlayers")
    const navigate = useNavigate()
    const players = useContext(PlayerContext)
    const handleNavigate = (id)=>{
        navigate(`/allplayers/${id}`)
    }

    return (
      <>
      <div className = "displayChange">
        <p>View Rough Ryders</p>
        <p>View Fluffy Fighters</p>
        <p>View Benched Players</p>
        <p>View All Players</p>
      </div>
        <div className = "playersBox">
            {
            players[view].map(player=>{
                return(
                    <div key ={player.id} className ="playerBox">
                        <img onMouseEnter={()=>setClassValue(player.id)} onMouseLeave={()=>setClassValue("")} onClick ={()=>handleNavigate(player.id)} src = {player.imageUrl} alt = {`a picture of a ${player.breed}`}/>
                        <div className = {`playerName ${classValue===player.id ? "found" : "hidden"}`}>
                            <h3>{player.name}</h3>
                            <p>Click to view Details</p>
                        </div>

                    </div>
                )
            })
            ||
            <p>Loading</p>
            }
        </div>
      </>
    )
  }
  
  export default AllPlayers