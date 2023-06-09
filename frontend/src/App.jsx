
import './App.css'
import Game2 from './components/game2/App2'
import Game from './components/game1/Game'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/home'
import Records from './components/records/records';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game1' element={<Game />} />
        <Route path='/game2' element={<Game2 />} />
        <Route path='/records' element={<Records />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
