import { Button } from '@mui/material'
import {useState } from 'react'

import './App.css'
import { HomePage } from './components/HomePage'
import { PlayingPage } from './components/PlayingPage'


function App() {
 const[tabel , setTabel] = useState([
   [{figure:"♜", name:"rook",color:"black",canMove:false,enemy:false,selected:false},
   {figure:"♞", name:"knight",color:"black",canMove:false,enemy:false,selected:false},
   {figure:"♝", name:"bishop",color:"black",canMove:false,enemy:false,selected:false},
   {figure:"♛", name:"queen",color:"black",canMove:false,enemy:false,selected:false},
   {figure:"♚", name:"king",color:"black",canMove:false,enemy:false,selected:false},
   {figure:"♝", name:"bishop",color:"black",canMove:false,enemy:false,selected:false},
   {figure:"♞", name:"knight",color:"black",canMove:false,enemy:false,selected:false},
   {figure:"♜", name:"rook",color:"black",canMove:false,enemy:false,selected:false}],

   [{figure:"♟", name:"pawn",color:"black",firstTimeMove:false,canMove:false,enemy:false,selected:false},
   {figure:"♟", name:"pawn",color:"black",firstTimeMove:false,canMove:false,enemy:false,selected:false},
   {figure:"♟", name:"pawn",color:"black",firstTimeMove:false,canMove:false,enemy:false,selected:false},
   {figure:"♟", name:"pawn",color:"black",firstTimeMove:false,canMove:false,enemy:false,selected:false},
   {figure:"♟", name:"pawn",color:"black",firstTimeMove:false,canMove:false,enemy:false,selected:false},
   {figure:"♟", name:"pawn",color:"black",firstTimeMove:false,canMove:false,enemy:false,selected:false},
   {figure:"♟", name:"pawn",color:"black",firstTimeMove:false,canMove:false,enemy:false,selected:false},
   {figure:"♟", name:"pawn",color:"black",firstTimeMove:false,canMove:false,enemy:false,selected:false}],

  [{figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
  {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
  {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
  {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
  {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
  {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
  {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
  {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false}],

  [{figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
  {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
  {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
  {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
  {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
  {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
  {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
  {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false}],

  [{figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
  {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
  {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
  {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
  {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
  {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
  {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
  {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false}],

  [{figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
  {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
  {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
  {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
  {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
  {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
  {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
  {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false}],

 
  [{figure:"♙", name:"pawn",color:"white",firstTimeMove:true,canMove:false,enemy:false,selected:false},
  {figure:"♙", name:"pawn",color:"white",firstTimeMove:true,canMove:false,enemy:false,selected:false},
  {figure:"♙", name:"pawn",color:"white",firstTimeMove:true,canMove:false,enemy:false,selected:false},
  {figure:"♙", name:"pawn",color:"white",firstTimeMove:true,canMove:false,enemy:false,selected:false},
  {figure:"♙", name:"pawn",color:"white",firstTimeMove:true,canMove:false,enemy:false,selected:false},
  {figure:"♙", name:"pawn",color:"white",firstTimeMove:true,canMove:false,enemy:false,selected:false},
  {figure:"♙", name:"pawn",color:"white",firstTimeMove:true,canMove:false,enemy:false,selected:false},
  {figure:"♙", name:"pawn",color:"white",firstTimeMove:true,canMove:false,enemy:false,selected:false}],

  [{figure:"♖", name:"rook",color:"white",canMove:false,enemy:false,selected:false},
  {figure:"♘", name:"knight",color:"white",canMove:false,enemy:false,selected:false},
  {figure:"♗", name:"bishop",color:"white",canMove:false,enemy:false,selected:false},
  {figure:"♕", name:"queen",color:"white",canMove:false,enemy:false,selected:false},
  {figure:"♔", name:"king",color:"white",canMove:false,enemy:false,selected:false},
  {figure:"♗", name:"bishop",color:"white",canMove:false,enemy:false,selected:false},
  {figure: "♘", name:"knight",color:"white",canMove:false,enemy:false,selected:false},
  {figure:"♖", name:"rook",color:"white",canMove:false,enemy:false,selected:false}],
 ])
 


  return (
    <div className="App">
      <div className='header'>
         <h1> Chess game</h1>
         <div className='user-info'>
          <img src="https://images.pexels.com/photos/13075582/pexels-photo-13075582.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
          <h3>Uran</h3>
         </div>
         
      </div>
      <div className='main'>
        <div className='leftmenu'>
         <button className='hint'> Hint💡</button>
         <button className='reset'>Reset Game</button>
        </div>
          <PlayingPage tabel={tabel} setTabel={setTabel}/>
       <div className='right_menu'>
        <div className='friend'>
         <img src="https://images.pexels.com/photos/13075582/pexels-photo-13075582.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
         <h4>Uran</h4>
        </div>
        <div className="messages">
          <ul>
            <li>Nice move</li>
          </ul>
        </div>
        <div className='sent'>
          <form><input/> <button>Sent</button></form>
        </div>

      </div>
            
      </div>
      {/* <HomePage/> */}
     
    </div>
  )
}

export default App
