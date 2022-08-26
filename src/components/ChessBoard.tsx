import { useEffect, useState } from 'react'
import { whiteFigureMove } from "../helpers/possibleMoves"
import { kill } from "../helpers/killOpositeFigure"

export function ChessBoard({ state, setState, usehint, setUseHint, user }: any) {
  const [selectedFIgure, setSelectedFIgure] = useState([])
  return (

    <div className={`chess-tabel ${user.player === 2 ? "second_user_table" : ""}`} >

      {
        state.board?.map(
          (row, rowIndex) => row.map((cel, cellIndex) => (<div onClick={() => {

            setUseHint(false)
            setSelectedFIgure(state.board[rowIndex][cellIndex])

            whiteFigureMove(rowIndex, cellIndex, state, setState, user)
            kill(rowIndex, cellIndex, state, setState, selectedFIgure, user)


          }} className={`cel ${(rowIndex - cellIndex) % 2 === 0 ? "white" : "black"} ${rowIndex}-${cellIndex} ${cel.selected ? "selected" : ""} ${user.player === 2 ? "second_user_cell" : ""} ${usehint ? (cel.canMove ? "canmove" : "") : ""} ${usehint ? (cel.enemy === true ? "enemy" : "") : ""}`}>{cel.figure}</div>)))}
    </div>

  )
}