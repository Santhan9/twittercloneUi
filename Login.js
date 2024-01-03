 import './Login.css'
 import React,{useState} from 'react'
 import { useNavigate  } from 'react-router-dom';



 const Login = ({onLogin})=>{

const [userName,setUserName]=useState("")
const [password,setPassword]=useState("")
const navigate = useNavigate ();

function handleLogin(){
    console.log("login submitted")
    onLogin(userName)

 }
 function handleSignUp(){
navigate("/signup")
 }
    return(
        <div className='container'>
        <div className="login">
            <div >
                <h2>User Login</h2>
                <label>User Email</label>
                <input type="text" name="userEmail" value={userName} onChange={(e)=>setUserName(e.target.value)}></input>
                <br/>
                <label>User Password</label>
                <input type="password" name="userPassword" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                <br/>
                <button className="loginButton" onClick={handleLogin}>Login</button>
                <br/>
                <br/>
                <button className='signupButton' onClick={handleSignUp}>SignUp</button>
            </div>
        </div>
        </div>
    )


 }



 export default Login