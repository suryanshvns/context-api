import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"
import './App.css'
const App = () => {
  return (
        <UserContextProvider>
        <h1>Heeeellllloooooo</h1>
        <Login/>
        <Profile/>
      </UserContextProvider>

  )
}

export default App