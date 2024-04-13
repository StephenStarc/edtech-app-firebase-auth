import React, { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Navbar from './components/Navbar';

import Login from './components/Login';
import SignUp from './components/SignUp';

import SignedIn from './components/SignedIn';


function App() {

 const [isState, setIsState] = useState('Home');
const [isLogged, setIsLogged] = useState(true)
const [email,setEmail] = useState('')

function PhaseChanger(state){
  setIsState(state)
}

 function stateHandler(userinfo,state){
  console.log(state);
  setEmail(userinfo.email)
  setIsLogged(false)
  setIsState(state)
  
 }


 return (
   <>
   <Navbar isLogged={isLogged} PhaseChanger={PhaseChanger}/>
   {isState === 'Home' && <Hero />}
   {isState === 'Home' && <Features />}
   {isState === 'Home' && <Pricing />}
   {isState === 'Login' && <Login stateHandler={stateHandler}/>}
   {isState === 'Signup' && <SignUp stateHandler={stateHandler}/>}
   {isState === 'Loggedin' && <SignedIn email={email}/>}
   </>
 );
}
export default App;