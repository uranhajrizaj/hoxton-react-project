import {useState } from 'react'
import {whiteFigureMove} from "../helpers/possibleMoves"
import {kill} from "../helpers/killOpositeFigure"

export function PlayingPage({tabel,setTabel}:any){
    const[selectedFIgure,setSelectedFIgure]=useState([])
  return ( 
       <div className="chess-tabel" >
        {tabel.map((row,rowIndex)=>row.map((cel,cellIndex)=>(<div onClick={()=>{
          //@ts-ignore
          setSelectedFIgure(tabel[rowIndex][cellIndex])
          whiteFigureMove(rowIndex,cellIndex,tabel,setTabel)
          kill(rowIndex,cellIndex,tabel,setTabel,selectedFIgure)
        
          }}className={`cel ${(rowIndex-cellIndex)%2===0?"white":"black"} ${rowIndex}-${cellIndex} ${cel.selected? "selected":""} ${cel.canMove?"canmove": ""} ${cel.enemy===true? "enemy":""}` }>{cel.figure}</div>)))}
      </div>
      
  )
}