import { Routes, Route, Link } from "react-router-dom"
import AllPlayers from "./components/AllPlayers"
import SinglePlayer from "./components/SinglePlayer"
import SearchPlayer from "./components/SearchPlayer"
import AddPlayer from "./components/AddPlayer"
import { useContext } from "react"
import { PlayerContext } from "./playerContext"

function App() {
  const{test} = useContext(PlayerContext)


  return (
    <>
    <div className = "navBar">
      <Link to="/allPlayers">View All Players</Link>
      <Link to="/">Home</Link>
      <Link to="/search">Search Players</Link>
      <Link to="/addplayer">Add a new Player</Link>
    </div>
    
    <Routes>
      <Route path="/" element ={<h1 className = "home">This is the home Page</h1>}/>
      <Route path="/allPlayers" element ={<AllPlayers />}/>
      <Route path="/allPlayers/:id" element ={<SinglePlayer/>}/>
      <Route path="/search" element ={<SearchPlayer/>}/>
      <Route path="/addPlayer" element ={<AddPlayer/>}/>
    </Routes>
    </>
  )
}

export default App