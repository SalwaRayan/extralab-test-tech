import React from "react"
import "./App.css"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Nav from "./components/Nav"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Sheet from "./pages/Sheet"

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:imdbID" element={<Sheet />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App