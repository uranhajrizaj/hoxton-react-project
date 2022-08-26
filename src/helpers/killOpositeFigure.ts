import { useEffect } from "react"

export function kill(rowIndex:number,colIndex:number,tabel:any,setTabel:any,selectedFIgure:any){
    // console.log(rowIndex,colIndex)
    if(tabel[rowIndex][colIndex].enemy) {
       const newTable=tabel.map(row=>row.map(cell=>cell.selected?{figure:"",selected:false,color:"",name:"",canMove:false,enemy:false}:{...cell,canMove:false,enemy:false}))
       const cell= newTable[rowIndex][colIndex]
       cell.figure=selectedFIgure.figure
       cell.color=selectedFIgure.color
       cell.name=selectedFIgure.name
       cell.canMove=false
       cell.selected=false
       selectedFIgure.figure.name==="pawn"? cell.firstTimeMove=false:null
     
        fetch("http://localhost:3005/board", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(newTable),
                }).then((response) => response.json())
                .then((Tabel) =>  setTabel(Tabel))
           
  
     
    }
    if(tabel[rowIndex][colIndex].canMove) {
      const newTable=tabel.map(row=>row.map(cell=>cell.selected?{figure:"",selected:false,color:"",name:"",canMove:false,enemy:false}:{...cell,canMove:false,enemy:false}))
      const cell= newTable[rowIndex][colIndex]
      cell.figure=selectedFIgure.figure
       cell.color=selectedFIgure.color
       cell.name=selectedFIgure.name
       cell.canMove=false
       cell.selected=false
       selectedFIgure.figure.name==="pawn"? cell.firstTimeMove=false:null
        fetch("http://localhost:3005/board", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(newTable),
                }).then((response) => response.json())
                .then((Tabel) =>  setTabel(Tabel))
              
    }

    
  }