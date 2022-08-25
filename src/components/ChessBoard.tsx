import {useState } from 'react'
import {whiteFigureMove} from "../helpers/possibleMoves"
import {kill} from "../helpers/killOpositeFigure"

export function ChessBoard({tabel,setTabel,usehint,setUseHint}:any){
    const[selectedFIgure,setSelectedFIgure]=useState([])
  return ( 
       <div className="chess-tabel" >
        
        {//@ts-ignore
        tabel.map((row,rowIndex)=>row.map((cel,cellIndex)=>(<div onClick={()=>{
          //@ts-ignore
          setUseHint(false)
          setSelectedFIgure(tabel[rowIndex][cellIndex])
          whiteFigureMove(rowIndex,cellIndex,tabel,setTabel)
          kill(rowIndex,cellIndex,tabel,setTabel,selectedFIgure)
        
          }}className={`cel ${(rowIndex-cellIndex)%2===0?"white":"black"} ${rowIndex}-${cellIndex} ${cel.selected? "selected":""}  ${ usehint?(cel.canMove?"canmove": ""):""} ${usehint? (cel.enemy===true? "enemy":""):""}` }>{cel.figure}</div>)))}
      </div>
      
  )
}