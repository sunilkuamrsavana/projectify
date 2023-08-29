
import Login from "./screens/login"
import "./App.css"
import SingUp from "./screens/signup"
import { useState } from "react"
import HomePage from "./screens/HomePage/HomePage"
import TaskPage from "./screens/TaskPage/TaskPage"
import SideBar from "./components/SideBar"
import ProjectsPage from "./screens/Projects/ProjectsPage"
import IsuuesPage from "./screens/Issues/IsuuesPage"

const App = () => {
  const[sidebar,SetSidebar]=useState(false)
  const[name,SetuserName]=useState("")
  const enum ScreenType {
    Login="Login",
    SignUp="SignUp",
    Home="Home",
    Task="Task",
    Issues="Issues",
    Projects="Projects"
  }
  const [currentScreen, setCurrentScreen] = useState(ScreenType.Login)
  const getScreen = () => {
		switch (currentScreen) {
      case (ScreenType.Login):
        return <Login OnLogin={(value:any)=>{SetSidebar(true);setCurrentScreen(ScreenType.Home);SetuserName(value)}}OnclickSignUp={()=>{setCurrentScreen(ScreenType.SignUp)}}/>
      case (ScreenType.SignUp):
        return <SingUp OnclickLogin={()=>{setCurrentScreen(ScreenType.Login)}}/>
      case(ScreenType.Home):
        return <HomePage userName={name} bar={!sidebar} OnclickBar={()=>{SetSidebar(true)}}/>
      case(ScreenType.Task):
        return <TaskPage/>
      case(ScreenType.Projects):
        return <ProjectsPage/>
      case(ScreenType.Issues):
        return <IsuuesPage/>
    }}
  return (
    <div className="app">
      <div className="sidebarContainer">
      {sidebar&&<SideBar OnclickBar={()=>{SetSidebar(!sidebar)}} onclickHome={()=>setCurrentScreen(ScreenType.Home)} onclickTask={()=>setCurrentScreen(ScreenType.Task)} onclickIssues={()=>setCurrentScreen(ScreenType.Issues)} onclickProjects={()=>setCurrentScreen(ScreenType.Projects)}/>}
      </div>
      <div className="screenContainer">
       {getScreen()}
      </div>
    </div>
  )
}
export default App