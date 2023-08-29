import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import "../App.css"

interface props{
  OnclickLogin?:any
}
export default function SingUp({OnclickLogin}:props) {
    const[email,SetEmail]=useState<any>()
    const[password,SetPassword]=useState<any>("")
    const[name,SetName]=useState<any>("")

    const signUp = (e:any) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const auth = getAuth();
        if(auth.currentUser != null){
            updateProfile((auth.currentUser), {
                displayName: name
              }).then(() => {
                // Profile updated!
              OnclickLogin()
                // ...
              }).catch((error:any) => {
                // An error occurred
                error()
                // ...
              });
        }
            console.log(userCredential);
          })
          .catch((error:any) => {
          });
      };
  return (
    <div className="login">
        <div className="loginContainer">
            <div className="loginTitle">
                SignUp
            </div>
            <div className="emailContainer">
                <p>Name:</p>
                <input type="text" placeholder="Enter your Name..." onChange={(e)=>{SetName(e.target.value)}} />
            </div>
            <div className="emailContainer">
                <p>Email:</p>
                <input type="text" placeholder="Enter your email..." onChange={(e)=>{SetEmail(e.target.value)}} />
            </div>
            <div className="passwordContainer">
                <p>Password:</p>
                <input type="text" placeholder="Enter your password...."onChange={(e)=>{SetPassword(e.target.value)}} />
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"10px",width:"300px",alignItems:"center"}}>
              <button onClick={signUp}>
                SignUp
              </button>
              <div style={{display:"flex",gap:'5px'}}>
                <p>Already a user?</p><p style={{color:"white",fontWeight:"bold",cursor:"pointer"}}onClick={OnclickLogin}>Login</p>
              </div>
            </div>
        </div>
    </div>
  )
}
