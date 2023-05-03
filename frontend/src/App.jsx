import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import App2 from './components/game2/App2'
import Game from './components/game1/Game'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App2 />} />
        <Route path='/game2' element={<Game />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
