export function kill(rowIndex:number,colIndex:number,tabel:any,setTabel:any,selectedFIgure:any){
    // console.log(rowIndex,colIndex)
    if(tabel[rowIndex][colIndex].enemy) {
       const newtabel=tabel.map(row=>row.map(cell=>cell.selected?{figure:"",selected:false,color:"",name:"",canMove:false,enemy:false}:{...cell,canMove:false,enemy:false}))
       const cell= newtabel[rowIndex][colIndex]
       cell.figure=selectedFIgure.figure
       cell.color=selectedFIgure.color
       cell.name=selectedFIgure.name
       cell.canMove=false
       cell.selected=false
       selectedFIgure.figure.name==="pawn"? cell.firstTimeMove=false:null
  
      setTabel(newtabel)
    }
    if(tabel[rowIndex][colIndex].canMove) {
      const newtabel=tabel.map(row=>row.map(cell=>cell.selected?{figure:"",selected:false,color:"",name:"",canMove:false,enemy:false}:{...cell,canMove:false,enemy:false}))
      const cell= newtabel[rowIndex][colIndex]
      cell.figure=selectedFIgure.figure
       cell.color=selectedFIgure.color
       cell.name=selectedFIgure.name
       cell.canMove=false
       cell.selected=false
       selectedFIgure.figure.name==="pawn"? cell.firstTimeMove=false:null

      setTabel(newtabel)
    }
    
  }