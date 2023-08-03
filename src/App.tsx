
import Login from "./screens/login"
import "./App.css"
import SingUp from "./screens/signup"
import { useState } from "react"
import HomePage from "./screens/HomePage/HomePage"

const App = () => {
  const enum ScreenType {
    Login="Login",
    SignUp="SignUp",
    Home="Home"
  }
  const [currentScreen, setCurrentScreen] = useState(ScreenType.Home)
  const getScreen = () => {
		switch (currentScreen) {
      case (ScreenType.Login):
        return <Login OnLogin={()=>{setCurrentScreen(ScreenType.Home)}}/>
      case (ScreenType.SignUp):
        return <SingUp/>
      case(ScreenType.Home):
        return <HomePage/>
    }}
  return (
    <div className="app">
      {getScreen()}
    </div>
  )
}
export default App