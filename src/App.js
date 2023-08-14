import React from 'react'
// import ButtonComponent from './components/button-component/ButtonComponent'
import Home from './Pages/home/Home'
import {Routes,Route} from "react-router-dom"
import Login from './Pages/login/Login'
import Registration from './Pages/registration/Registration'
import Account from './Pages/account/Account'

const App = () => {
  return (
    // <Router>
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/login" element={ <Login/>} />
        <Route path="/register" element={ <Registration/>} />
        <Route path="/login/profile" element={ <Account/>} />
      </Routes>
    // </Router>
    // <Home/>
    // <Login/>
    // <Registration />
    // <Account />
  )
}

export default App