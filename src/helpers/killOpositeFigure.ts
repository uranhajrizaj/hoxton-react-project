import { useEffect } from "react"

export function kill(rowIndex: number, colIndex: number, state: any, setState: any, selectedFIgure: any, user: any) {
  // console.log(rowIndex,colIndex)
  if (state.board[rowIndex][colIndex].enemy) {
    const newTable = state.board.map(row => row.map(cell => cell.selected ? { figure: "", selected: false, color: "", name: "", canMove: false, enemy: false } : { ...cell, canMove: false, enemy: false }))
    const cell = newTable[rowIndex][colIndex]
    cell.figure = selectedFIgure.figure
    cell.color = selectedFIgure.color
    cell.name = selectedFIgure.name
    cell.canMove = false
    cell.selected = false
    selectedFIgure.figure.name === "pawn" ? cell.firstTimeMove = false : null

    fetch("http://localhost:3005/state/", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        board: newTable,
        turn: user.player === 1 ? 'black' : 'white'
      }),
    }).then((response) => response.json())
      .then((newState) => setState(newState))



  }
  if (state.board[rowIndex][colIndex].canMove) {
    const newTable = state.board.map(row => row.map(cell => cell.selected ? { figure: "", selected: false, color: "", name: "", canMove: false, enemy: false } : { ...cell, canMove: false, enemy: false }))
    const cell = newTable[rowIndex][colIndex]
    cell.figure = selectedFIgure.figure
    cell.color = selectedFIgure.color
    cell.name = selectedFIgure.name
    cell.canMove = false
    cell.selected = false
    selectedFIgure.figure.name === "pawn" ? cell.firstTimeMove = false : null
    fetch("http://localhost:3005/state/", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        board: newTable,
        turn: user.player === 1 ? 'black' : 'white'
      }),
    }).then((response) => response.json())
      .then((newState) => setState(newState))

  }
}