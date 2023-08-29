import React from 'react'
import "./Sidebar.css"

interface propsIF{
    onclickHome?:any
    onclickProjects?:any
    onclickTask?:any
    onclickIssues?:any
    OnclickBar?:any
}
function SideBar({onclickHome,onclickIssues,onclickProjects,onclickTask,OnclickBar}:propsIF) {
  return (
    <div className='sidebar' >
        <div className="header" >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={OnclickBar}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
          <div className='title'>Projectify</div>
        </div>
        <p onClick={onclickHome}>Home</p>
        <p onClick={onclickProjects}>Projects</p>
        <p onClick={onclickTask}>Tasks</p>
        <p onClick={onclickIssues}>Isuues</p>
    </div>
  )
}

export default SideBar