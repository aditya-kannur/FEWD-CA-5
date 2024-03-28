import { useState } from 'react'
import './App.css'
import Forms from './Component/Forms'
import Books from './Component/Books'
import NavBar from './Component/NavBar'
import { BrowserRouter , Route,Routes} from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
          <NavBar/>
      </BrowserRouter>
    </>
  )
}

export default App
