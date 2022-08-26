import {useEffect, useState } from 'react'
import {whiteFigureMove} from "../helpers/possibleMoves"
import {kill} from "../helpers/killOpositeFigure"

export function ChessBoard({tabel,setTabel,usehint,setUseHint,user}:any){
    const[selectedFIgure,setSelectedFIgure]=useState([])
  return ( 

       <div className={`chess-tabel ${user.player===2? "second_user_table":""}`} >
        
        {//@ts-ignore
        tabel.map((row,rowIndex)=>row.map((cel,cellIndex)=>(<div onClick={()=>{
          //@ts-ignore
          setUseHint(false)
          setSelectedFIgure(tabel[rowIndex][cellIndex])
          
          whiteFigureMove(rowIndex,cellIndex,tabel,setTabel,user)
          kill(rowIndex,cellIndex,tabel,setTabel,selectedFIgure)
        
        
          }}className={`cel ${(rowIndex-cellIndex)%2===0?"white":"black"} ${rowIndex}-${cellIndex} ${cel.selected? "selected":""} ${user.player===2? "second_user_cell":""} ${ usehint?(cel.canMove?"canmove": ""):""} ${usehint? (cel.enemy===true? "enemy":""):""}` }>{cel.figure}</div>)))}
      </div> 
      
  )
}