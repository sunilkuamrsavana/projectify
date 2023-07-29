import { signInWithEmailAndPassword} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import "../App.css"

interface propsIF{
    OnLogin?:any
}
export default function Login({OnLogin}:propsIF) {
    const[email,SetEmail]=useState<any>()
    const[password,SetPassword]=useState<any>("")
    const signIn = (e:any) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            console.log(userCredential);
            console.log(userCredential.user.displayName)
            OnLogin()
          })
          .catch((error) => {
            console.log(error);
            window.alert(error)
          });
      };
  return (
    <div className="login">
        <div className="loginContainer">
            <div className="loginTitle">
                Login
            </div>
            <div className="emailContainer">
                <p>Email:</p>
                <input type="text" placeholder="Enter your email..." onChange={(e)=>{SetEmail(e.target.value)}} />
            </div>
            <div className="passwordContainer">
                <p>Password:</p>
                <input type="text" placeholder="Enter your password...."onChange={(e)=>{SetPassword(e.target.value)}} />
            </div>
            <button onClick={signIn}>
                Login
            </button>
        </div>
    </div>
  )
}
