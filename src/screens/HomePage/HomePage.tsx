import React from 'react'
import DragAndDrop from '../../components/DragAndDrop'
import { v4 as uuidv4 } from "uuid";
import"./HomePage.css"

interface props{
  OnclickBar?:any
  bar?:any
  userName?:any
}
function HomePage({OnclickBar,bar=false,userName}:props) {

  return (
    <div className='Homescreen'>
      <div className="headerHome">
        {bar&&<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={OnclickBar}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg>}
        <div className="Title">
          Home
        </div>
      </div>
    <div className="homeBody">
      <div className='Welcome'>
        Welcome   {userName}
      </div>
      <div className='box-container'>
        <div className="boxes">

        </div>
        <div className="boxes">
          
        </div>
        <div className="boxes">
          
        </div>
        <div className="boxes">
          
        </div>
        <div className="boxes">
          
        </div>
        <div className="boxes">
          
        </div>
      </div>
      <div className="boards">
        <div className="containers">
          <div className="container_header">
            My Tasks
          </div>
          <div className="lists">

          </div>
        </div>
        <div className="containers">
          <div className="container_header"></div>
          <div className="lists">
            
            </div>
        </div>
        <div className="containers">
          <div className="container_header"></div>
          <div className="lists">
            
          </div>
        </div>
        <div className="containers">
          <div className="container_header"></div>
          <div className="lists">
            
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default HomePage