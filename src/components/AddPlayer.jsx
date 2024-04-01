
//team id
import { useContext, useState } from "react"
import { PlayerContext } from "../playerContext"
import SinglePlayer from "./SinglePlayer"
import { Link } from "react-router-dom"


function AddPlayer() {
  const {newPlayer, addNewPlayer, setPlayer} = useContext(PlayerContext)
  const [player, setThePlayer] = useState({name:"", breed:"", status:"bench", imageUrl:"", teamId:"" })
  console.log(newPlayer)
    function handleClick(e){
      const {name, value} = e.target
      setThePlayer((previousValue)=>{return{...previousValue, [name]:value}})
    }
    return (
      <>
        <form className = "addForm" onSubmit={(e)=>{
          e.preventDefault()
          addNewPlayer(player)
          }}>
          <label>
            Player Name
            <input
            name= "name"
            value = {player.name}
            onChange = {(e)=>handleClick(e)}
            />
          </label>

          <label>
            Player Breed
            <input
            name= "breed"
            value = {player.breed}
            onChange = {(e)=>handleClick(e)}
            />
          </label>

          <label>
            A picture of your player
            <input
            name= "imageUrl"
            value = {player.imageUrl}
            onChange = {(e)=>handleClick(e)}
            />
          </label>
          <div className = "buttonRow">
            Choose a team : 
            <button className = {player.teamId == "185" ? "selected" : ''} type = "button" onClick={()=>setThePlayer((previousValue)=>{return{...previousValue, status:"field", teamId:185}})}>Fluffy Fighter</button>
            <button className = {player.teamId == "186" ? "selected" : ''} type = "button" onClick={()=>setThePlayer((previousValue)=>{return{...previousValue, status:"field", teamId:186}})}>Ruff Ryders</button>
            <button className = {player.status === "bench" ? "selected" : ''}type = "button" onClick={()=>setThePlayer((previousValue)=>{return{...previousValue,status:"bench", teamId:""}})}>Bench</button>
          </div>
            <input
            type = "submit"
            value = "Submit New Player"
            />

        </form>
          {newPlayer &&
          <div>
            <Link to ='/allplayers'>View all players</Link>
            {newPlayer.teamId === 185
            ?
              <Link to ='/allplayers'>View Fluffy Fighter </Link>
            :
            newPlayer.teamId === 186
            && 
             <Link to ='/allplayers'>View Ruff Ryders </Link>
            }
            
          </div>
          }
      </>
    )
  }
  
  export default AddPlayer
  