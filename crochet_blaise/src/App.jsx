import { useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'
import CreatePattern from './components/CreatePattern'



function App() {
 
  return (
    <div className='app'>
       <Header />
       <Nav />
       <Main />
       <Footer />

    </div>
      
  )
}

export default App
