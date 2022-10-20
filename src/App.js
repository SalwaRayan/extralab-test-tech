import React from "react"
import "./App.css"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Nav from "./components/Nav"

import Home from "./pages/Home"

const App = () => {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App