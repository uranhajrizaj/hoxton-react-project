import {  Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { PlayPage } from './components/PlayPage'
import { HomePage } from './components/HomePage'
import { useState } from 'react'



function App() {
  const[user,setUser]=useState()
  return (
    <div className="App">
      <Routes>
       <Route index element={<Navigate to="/homepage"/>} />
       <Route path="/homepage" element={<HomePage setUser={setUser}/>}/>
        <Route path="/chess_game" element={<PlayPage user={user}/>}/>
      </Routes>
     
    </div>
  )
}

export default App
