import {Route, Routes} from 'react-router-dom';
// import React,{useState} from 'react';
// import {Navigate} from 'react-router';

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import PublicRoute from './components/PublicRoute';

import './App.css'

const App = () => {
  // const [auth, setAuth] = useState(false);
  // if(auth){
  //   return <Navigate to="/" />
  // }
  return(
    <Routes>

      
      {/* <ProtectedRoute path="/" element={<Home/>} /> */}
      {/* <Route exact path="/" element={<h1>Hello</h1>} /> */}
      {/* <ProtectedRoute path="/" element={<Home/>} auth={true} /> */} 
  {/* <Route onClick={() => {setAuth(true)}} exact path="/login"  element={<LoginForm/>} /> */}
     <Route
        path="/login"
        element={<PublicRoute  redirectLink={'/'} Component={LoginForm} />}
    />
      <Route
        path="/"
        element={<ProtectedRoute  redirectLink={'/login'} Component={Home} />}

    />
 
    </Routes>
  )
}

export default App
