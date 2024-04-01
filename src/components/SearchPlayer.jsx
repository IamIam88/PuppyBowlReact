import { useContext, useState, useEffect } from "react"
import { PlayerContext } from "../playerContext"
function SearchPlayer() {
  const {players} = useContext(PlayerContext)
    const [search, setSearch] = useState("")
    const [searchedPlayers, setSearchedPlayers] = useState([])
    
  useEffect(()=>{

    const filteredPlayers = players.filter(player=>{
      const upperName = player.name.toUpperCase()
     return upperName.indexOf(search.toUpperCase())>=0
    })
    setSearchedPlayers(filteredPlayers)
    if(search.length<=0){
      setSearchedPlayers([])
    }
  },[search])

    return (
      <>
      <form>
        <label className = "searchLabel">
          Search For Players
          <input
          name = "search"
          value = {search}
          onChange = {(e)=>setSearch(e.target.value)}
          />
        </label>
      </form>
      <div className = "playersBox">
        {
        searchedPlayers.length>0 ? 
            searchedPlayers.map(player=>{
              return(
                <div className ="playerBox">
                  <img src = {player.imageUrl} alt = {`a picture of a ${player.breed}`}/>
                  <h3>{player.name}</h3>
                  <button onClick ={()=>handleNavigate(player.id)}>View My Details!</button>
                </div>
              )
            })
        :
        search.length>0 &&
        <p>Sorry! No players match your Search</p> 
        }
      </div>
      </>
    )
  }
  
  export default SearchPlayer