import React, { useState } from "react";
import "./HomePage.css";
import { DragAndDrop } from "../../components/DragAndDrop";
export default function HomePage() {
  const [sidebar, SetSidebar] = useState(true);
  return (
    <div className="HomePage">
      {sidebar && (
        <div className="sidebar">
          <div className="Sideheader">
            <div
              className="Menuicon"
              onClick={() => {
                SetSidebar(false);
              }}
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                ></path>
              </svg>
            </div>
            <p>Manage</p>
          </div>
          
        </div>
      )}
      <div className="HomeBody">
        <div className="bodyHeader">
          {(!sidebar)&&<div
            className="Menuicon"
            onClick={() => {
              SetSidebar(true);
            }}
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              ></path>
            </svg>
          </div>}
          <p style={{color:"white"}}>Home</p>
        </div>
        <div className="HomeMainBody">
          <div className="HomeMainBodyContainer">
            <div className="homeBoxes">
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
             <DragAndDrop/>
          </div>
        </div>
      </div>
    </div>
  );
}
