import './App.css';
import Header from './Header';
import Signup from './Signup';
import Login from './Login';
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';

function App() {

  const [loggedIn,setLoggedIn] = useState(false)
  const [isSignUp,setIsSignUp] = useState(false)
  const [userName,setUserName] = useState("")

  function handleLogin(user){
    setLoggedIn(true)
    setUserName(user)
  }
  function handleSignup(){
    setIsSignUp(true)
  }

  return (
    <div className='App'>
      <Header/>
      <Router>
      <Routes>
      <Route path='/' element=
      
          {loggedIn ?(
            <div>
              <p>Home Page {userName}</p>
            </div>
          ):(
            <Login onLogin={handleLogin}/>
          )}
        />
        <Route path='/login' element={
          <Login onLogin={handleLogin} onSignUp={handleSignup}/>}
        />
        <Route path='/signup' element={
          <Signup />}
        />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
