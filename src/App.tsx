import { useState } from 'react'

import './App.css'

function App() {
  const[tabel , setTabel] = useState([
    [{figure:"♜", name:"black",canMove:false},
    {figure:"♞", name:"black",canMove:false},
    {figure:"♝", name:"black",canMove:false},
    {figure:"♛", name:"black",canMove:false},
    {figure:"♚", name:"black",canMove:false},
    {figure:"♝", name:"black",canMove:false},
    {figure:"♞", name:"black",canMove:false},
    {figure:"♜", name:"black",canMove:false}],
 
    [{figure:"♟", name:"black-pawn",canMove:false},
    {figure:"♟", name:"black-pawn",canMove:false},
    {figure:"♟", name:"black-pawn",canMove:false},
    {figure:"♟", name:"black-pawn",canMove:false},
    {figure:"♟", name:"black-pawn",canMove:false},
    {figure:"♟", name:"black-pawn",canMove:false},
    {figure:"♟", name:"black-pawn",canMove:false},
    {figure:"♟", name:"black-pawn",canMove:false}],

    [{figure:"", name:"",canMove:false},
    {figure:"", name:"",canMove:false},
    {figure:"", name:"",canMove:false},
    {figure:"", name:"",canMove:false},
    {figure:"", name:"",canMove:false},
    {figure:"", name:"",canMove:false},
    {figure:"", name:"",canMove:false},
    {figure:"", name:"",canMove:false}],
 
   [{figure:"",name:"",canMove:false},
   {figure:"",name:"",canMove:false},
   {figure:"",name:"",canMove:false},
   {figure:"",name:"",canMove:false},
   {figure:"",name:"",canMove:false},
   {figure:"",name:"",canMove:false},
   {figure:"",name:"",canMove:false},
   {figure:"",name:"",canMove:false}],
 
   [{figure:"",name:"",canMove:false},
   {figure:"",name:"",canMove:false},
   {figure:"",name:"",canMove:false},
   {figure:"",name:"",canMove:false},
   {figure:"",name:"",canMove:false},
   {figure:"",name:"",canMove:false},
   {figure:"",name:"",canMove:false},
   {figure:"",name:"",canMove:false}],
 
   [{figure:"",name:"",canMove:false},
   {figure:"",name:"",canMove:false},
   {figure:"",name:"",canMove:false},
   {figure:"",name:"",canMove:false},
   {figure:"",name:"",canMove:false},
   {figure:"",name:"",canMove:false},
   {figure:"",name:"",canMove:false},
   {figure:"",name:"",canMove:false}],
 
  
   [{figure:"♙", name:"whitePawn",canMove:false},
   {figure:"♙", name:"whitePawn",canMove:false},
   {figure:"♙", name:"whitePawn",canMove:false},
   {figure:"♙", name:"whitePawn",canMove:false},
   {figure:"♙", name:"whitePawn",canMove:false},
   {figure:"♙", name:"whitePawn",canMove:false},
   {figure:"♙", name:"whitePawn",canMove:false},
   {figure:"♙", name:"whitePawn",canMove:false}],
 
   [{figure:"♖", name:"white",canMove:false},
   {figure:"♘", name:"white",canMove:false},
   {figure:"♗", name:"white",canMove:false},
   {figure:"♕", name:"white",canMove:false},
   {figure:"♔", name:"white",canMove:false},
   {figure:"♗", name:"white",canMove:false},
   {figure: "♘", name:"white",canMove:false},
   {figure:"♖", name:"white",canMove:false}],
  ])

  return (
    <div className="App">
       <div className="chess-tabel" >
        {tabel.map((row,rowIndex)=>row.map((cel,cellIndex)=>(<div className={`cel ${(rowIndex-cellIndex)%2===0?"white":"black"} ${rowIndex}-${cellIndex} ${cel.canMove}`}>{cel.figure}</div>)))}
      </div>
    </div>
  )
}

export default App
