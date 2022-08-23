import { cloneElement, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

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

   [{figure:"♟", name:"pawn",color:"black",canMove:false,enemy:false,selected:false},
   {figure:"♟", name:"pawn",color:"black",canMove:false,enemy:false,selected:false},
   {figure:"♟", name:"pawn",color:"black",canMove:false,enemy:false,selected:false},
   {figure:"♟", name:"pawn",color:"black",canMove:false,enemy:false,selected:false},
   {figure:"♟", name:"pawn",color:"black",canMove:false,enemy:false,selected:false},
   {figure:"♟", name:"pawn",color:"black",canMove:false,enemy:false,selected:false},
   {figure:"♟", name:"pawn",color:"black",canMove:false,enemy:false,selected:false},
   {figure:"♟", name:"pawn",color:"black",canMove:false,enemy:false,selected:false}],

  [{figure:"♖",name:"rook",color:"white",canMove:false,enemy:false,selected:false},
  {figure:"♕",name:"queen",color:"white",canMove:false,enemy:false,selected:false},
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

  [{figure:"♙",name:"",color:"white",canMove:false,enemy:false,selected:false},
  {figure:"♟",name:"",color:"black",canMove:false,enemy:false,selected:false},
  {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
  {figure:"♖",name:"rook",color:"white",canMove:false,enemy:false,selected:false},
  {figure:"♕",name:"queen",color:"white",canMove:false,enemy:false,selected:false},
  {figure:"♟",name:"",color:"black",canMove:false,enemy:false,selected:false},
  {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false},
  {figure:"",name:"",color:"",canMove:false,enemy:false,selected:false}],

 
  [{figure:"", name:"",color:"",canMove:false,enemy:false,selected:false},
  {figure:"♙", name:"pawn",color:"white",canMove:false,enemy:false,selected:false},
  {figure:"♙", name:"pawn",color:"white",canMove:false,enemy:false,selected:false},
  {figure:"", name:"",color:"",canMove:false,enemy:false,selected:false},
  {figure:"♙", name:"pawn",color:"white",canMove:false,enemy:false,selected:false},
  {figure:"♙", name:"pawn",color:"white",canMove:false,enemy:false,selected:false},
  {figure:"♙", name:"pawn",color:"white",canMove:false,enemy:false,selected:false},
  {figure:"♙", name:"pawn",color:"white",canMove:false,enemy:false,selected:false}],

  [{figure:"♖", name:"rook",color:"white",canMove:false,enemy:false,selected:false},
  {figure:"♘", name:"knight",color:"white",canMove:false,enemy:false,selected:false},
  {figure:"♗", name:"bishop",color:"white",canMove:false,enemy:false,selected:false},
  {figure:"♕", name:"queen",color:"white",canMove:false,enemy:false,selected:false},
  {figure:"♔", name:"king",color:"white",canMove:false,enemy:false,selected:false},
  {figure:"♗", name:"bishop",color:"white",canMove:false,enemy:false,selected:false},
  {figure: "♘", name:"knight",color:"white",canMove:false,enemy:false,selected:false},
  {figure:"♖", name:"rook",color:"white",canMove:false,enemy:false,selected:false}],
 ])


function whiteFigureMove(rowIndex:number,colIndex:number){
  
  if(tabel[rowIndex][colIndex].color==="white"){

   if(tabel[rowIndex][colIndex].name==="rook"){
     const newTabel = [...tabel]
     newTabel[rowIndex][colIndex].selected=true

   //check for emeny in the right
     for(let i=colIndex+1; i<8; i++){
      if(newTabel[rowIndex][i].color==="white") break
      if(newTabel[rowIndex][i].color!=="white") newTabel[rowIndex][i].canMove=true
      if(newTabel[rowIndex][i].color==="black") {
        newTabel[rowIndex][i].enemy=true
        break
      }    
     }
    //check for possibble move and enemy in the left
     for(let i=colIndex-1; i>=0; i--){
      // console.log(i)
      if(newTabel[rowIndex][i].color==="white") break
      if(newTabel[rowIndex][i].color!=="white") newTabel[rowIndex][i].canMove=true
      if(newTabel[rowIndex][i].color==="black") {
        newTabel[rowIndex][i].enemy=true
        break
      } 
    }
    //check for possibble move and enemy emeny up
    for(let i=rowIndex-1; i>0; i--){
      // console.log(`colindex`,colIndex)
      // console.log(i)
      if(newTabel[i][colIndex].color==="white") break
      
      if(newTabel[i][colIndex].color!=="white")  newTabel[i][colIndex].canMove=true 
      
      if(newTabel[i][colIndex].color==="black") {
        newTabel[i][colIndex].enemy=true
        break
      } 
    }
  //check for possibble move and enemy emeny down
    for(let i=rowIndex+1; i<8; i++){
      //  console.log(`colindex`,colIndex)
      //   console.log(i)
      if(newTabel[i][colIndex].color==="white") break
      console.log(`colindex`,colIndex)
      console.log(i)
      if(newTabel[i][colIndex].color!=="white") newTabel[i][colIndex].canMove=true
      if(newTabel[i][colIndex].color==="black") {
       newTabel[i][colIndex].enemy=true
       break
    } 
  }

     setTabel(newTabel)
     
}

if(tabel[rowIndex][colIndex].name==="queen"){
  const newTabel = [...tabel]
  newTabel[rowIndex][colIndex].selected=true

//check for emeny in the right
  for(let i=colIndex+1; i<8; i++){
   if(newTabel[rowIndex][i].color==="white") break
   if(newTabel[rowIndex][i].color!=="white") newTabel[rowIndex][i].canMove=true
   if(newTabel[rowIndex][i].color==="black") {
     newTabel[rowIndex][i].enemy=true
     break
   }    
  }
 //check for possibble move and enemy in the left
  for(let i=colIndex-1; i>=0; i--){
   // console.log(i)
   if(newTabel[rowIndex][i].color==="white") break
   if(newTabel[rowIndex][i].color!=="white") newTabel[rowIndex][i].canMove=true
   if(newTabel[rowIndex][i].color==="black") {
     newTabel[rowIndex][i].enemy=true
     break
   } 
 }
 //check for possibble move and enemy emeny up
 for(let i=rowIndex-1; i>0; i--){
   // console.log(`colindex`,colIndex)
   // console.log(i)
   if(newTabel[i][colIndex].color==="white") break
   
   if(newTabel[i][colIndex].color!=="white")  newTabel[i][colIndex].canMove=true 
   
   if(newTabel[i][colIndex].color==="black") {
     newTabel[i][colIndex].enemy=true
     break
   } 
 }
//check for possibble move and enemy emeny down
 for(let i=rowIndex+1; i<8; i++){
   //  console.log(`colindex`,colIndex)
   //   console.log(i)
   if(newTabel[i][colIndex].color==="white") break
   console.log(`colindex`,colIndex)
   console.log(i)
   if(newTabel[i][colIndex].color!=="white") newTabel[i][colIndex].canMove=true
   if(newTabel[i][colIndex].color==="black") {
    newTabel[i][colIndex].enemy=true
    break
 } 
}

//check for possibble move and enemy emeny in \ diagonal up
 for(let i=1; i<8; i++){
  
  if(newTabel[rowIndex+i][colIndex+i].color==="white") break
  console.log(`colindex`,colIndex)
  console.log(rowIndex)
  if(newTabel[rowIndex+i][colIndex+i].color!=="white") newTabel[rowIndex+i][colIndex+i].canMove=true
  if(newTabel[rowIndex+i][colIndex+i].color==="black") {
   newTabel[rowIndex+i][colIndex+i].enemy=true
   break
 } 
 
 
 }
 for(let i=1; i<8; i++){
  
  if(newTabel[rowIndex-i][colIndex-i].color==="white") break
  console.log(`colindex`,colIndex)
  console.log(rowIndex)
  if(newTabel[rowIndex-i][colIndex-i].color!=="white") newTabel[rowIndex-i][colIndex-i].canMove=true
  if(newTabel[rowIndex-i][colIndex-i].color==="black") {
   newTabel[rowIndex-i][colIndex-i].enemy=true
   break
 } 
 
 }

  setTabel(newTabel)
  
}
}
}
function kill(rowIndex:number,colIndex:number){
  // console.log(rowIndex,colIndex)
  if(tabel[rowIndex][colIndex].enemy) {
     const newtabel=tabel.map(row=>row.map(cell=>cell.selected?{figure:"",selected:false,color:"",name:"",canMove:false,enemy:false}:{...cell,canMove:false,enemy:false}))
     const cell= newtabel[rowIndex][colIndex]
     cell.figure="♖"
     cell.color="white"
     cell.name="rook"
     cell.canMove=false
     cell.selected=false

    setTabel(newtabel)
  }
  if(tabel[rowIndex][colIndex].canMove) {
    const newtabel=tabel.map(row=>row.map(cell=>cell.selected?{figure:"",selected:false,color:"",name:"",canMove:false,enemy:false}:{...cell,canMove:false,enemy:false}))
    const cell= newtabel[rowIndex][colIndex]
    cell.figure="♖"
    cell.color="white"
    cell.name="rook"
    cell.canMove=false
    cell.selected=false
    setTabel(newtabel)
  }
  
}

  return (
    <div className="App">
      <div className="chess-tabel" >
        {tabel.map((row,rowIndex)=>row.map((cel,cellIndex)=>(<div onClick={()=>{
          whiteFigureMove(rowIndex,cellIndex)
          kill(rowIndex,cellIndex)
        
          }}className={`cel ${(rowIndex-cellIndex)%2===0?"white":"black"} ${rowIndex}-${cellIndex} ${cel.selected? "selected":""} ${cel.canMove?"canmove": ""} ${cel.enemy===true? "enemy":""}` }>{cel.figure}</div>)))}
      </div>
     
    </div>
  )
}

export default App
