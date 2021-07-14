import React from 'react'
// import logo from './logo.svg'
import './App.css'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error.js'
import { Route, Switch } from 'react-router-dom'
import Navbar from './pages/Navbar'

function App () {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Rooms" component={Rooms} />
      <Route exact path="/Rooms/:slug" component={SingleRoom} />
      <Route component={Error} />
    </Switch>
    </>
  )
}

export default App
