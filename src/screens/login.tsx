import { signInWithEmailAndPassword} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import "../App.css"

interface propsIF{
    OnLogin?:any
    OnclickSignUp?:any
}
export default function Login({OnLogin,OnclickSignUp}:propsIF) {
    const[email,SetEmail]=useState<any>()
    const[password,SetPassword]=useState<any>("")
    const signIn = (e:any) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            console.log(userCredential);
            console.log(userCredential.user.displayName)
            OnLogin(userCredential.user.displayName)

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
            <div style={{display:"flex",justifyContent:"center",width:"300px",margin:"0px",padding:"0px"}}>
                <p style={{width:" -webkit-fill-available",padding:0,margin:0,cursor:"pointer"}}>Forgot password?</p>
                <p style={{width:"100%",padding:0,margin:0,display:"flex",justifyContent:"flex-end",color:"white",cursor:"pointer"}}onClick={OnclickSignUp}>Sign Up</p>
            </div>
            <button onClick={signIn}>
                Login
            </button>
        </div>
    </div>
  )
}
