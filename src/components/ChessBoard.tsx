import { useEffect, useState } from 'react'
import { whiteFigureMove } from "../helpers/possibleMoves"
import { kill } from "../helpers/killOpositeFigure"
import { CheckWinner } from '../helpers/CheckWinner'

export function ChessBoard({ state, setState, usehint, setUseHint, user,setWinner }: any) {
  const [selectedFIgure, setSelectedFIgure] = useState([])
  //@ts-ignore

  return (

    <div className={`chess-tabel ${user.player === 2 ? "second_user_table" : ""}`} >

      {//@ts-ignore
        state.board?.map((row, rowIndex) => row.map((cel, cellIndex) => (<div onClick={() => {
            CheckWinner(state,setWinner, user)
            setUseHint(false)
            setSelectedFIgure(state.board[rowIndex][cellIndex])

            whiteFigureMove(rowIndex, cellIndex, state, setState, user)
            kill(rowIndex, cellIndex, state, setState, selectedFIgure, user)


          }} className={`cel ${(rowIndex - cellIndex) % 2 === 0 ? "white" : "black"} ${rowIndex}-${cellIndex} ${cel.selected ? "selected" : ""} ${user.player === 2 ? "second_user_cell" : ""} ${usehint ? (cel.canMove ? "canmove" : "") : ""} ${usehint ? (cel.enemy === true ? "enemy" : "") : ""}`}>{cel.figure}</div>)))}
    </div>

  )
}