import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Qr from './Components/Qr';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Qr />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
