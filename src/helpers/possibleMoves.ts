
export function whiteFigureMove(rowIndex:number,colIndex:number,tabel:any,setTabel:any,user:any){
  // possible moves for white figures

  if(tabel[rowIndex][colIndex].color==="white"&&user.player===1){
  
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
      for(let i=rowIndex-1; i>=0; i--){
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
   for(let i=rowIndex-1; i>=0; i--){
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
     if(rowIndex+i===8||colIndex+i===8)break
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
    if(rowIndex-i===-1||colIndex-i===-1)break
    if(newTabel[rowIndex-i][colIndex-i].color==="white") break
    console.log(`colindex`,colIndex)
    console.log(rowIndex)
    if(newTabel[rowIndex-i][colIndex-i].color!=="white") newTabel[rowIndex-i][colIndex-i].canMove=true
    if(newTabel[rowIndex-i][colIndex-i].color==="black") {
     newTabel[rowIndex-i][colIndex-i].enemy=true
     break
   } 
   
   }

     //check for possibble move and enemy emeny in / diagonal up
     for(let i=1; i<8; i++){
        if(rowIndex+i===8||colIndex-i===-1)break
       if(newTabel[rowIndex+i][colIndex-i].color==="white") break
       console.log(`colindex`,colIndex)
       console.log(rowIndex)
       if(newTabel[rowIndex+i][colIndex-i].color!=="white") newTabel[rowIndex+i][colIndex-i].canMove=true
       if(newTabel[rowIndex+i][colIndex-i].color==="black") {
        newTabel[rowIndex+i][colIndex-i].enemy=true
        break
      } 
      
      }
      for(let i=1; i<8; i++){
       if(rowIndex-i===-1||colIndex+i===8)break
       if(newTabel[rowIndex-i][colIndex+i].color==="white") break
       console.log(`colindex`,colIndex)
       console.log(rowIndex)
       if(newTabel[rowIndex-i][colIndex+i].color!=="white") newTabel[rowIndex-i][colIndex+i].canMove=true
       if(newTabel[rowIndex-i][colIndex+i].color==="black") {
        newTabel[rowIndex-i][colIndex+i].enemy=true
        break
      } 
      
      }
  
    setTabel(newTabel)
    
  }

    if(tabel[rowIndex][colIndex].name==="bishop"){
    const newTabel = [...tabel]
    newTabel[rowIndex][colIndex].selected=true
         //check for possibble move and enemy emeny in \ diagonal up
   for(let i=1; i<8; i++){
    if(rowIndex+i===8||colIndex+i===8)break
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
   if(rowIndex-i===-1||colIndex-i===-1)break
   if(newTabel[rowIndex-i][colIndex-i].color==="white") break
   console.log(`colindex`,colIndex)
   console.log(rowIndex)
   if(newTabel[rowIndex-i][colIndex-i].color!=="white") newTabel[rowIndex-i][colIndex-i].canMove=true
   if(newTabel[rowIndex-i][colIndex-i].color==="black") {
    newTabel[rowIndex-i][colIndex-i].enemy=true
    break
  } 
  
  }

    //check for possibble move and enemy emeny in / diagonal up
    for(let i=1; i<8; i++){
       if(rowIndex+i===8||colIndex-i===-1)break
      if(newTabel[rowIndex+i][colIndex-i].color==="white") break
      console.log(`colindex`,colIndex)
      console.log(rowIndex)
      if(newTabel[rowIndex+i][colIndex-i].color!=="white") newTabel[rowIndex+i][colIndex-i].canMove=true
      if(newTabel[rowIndex+i][colIndex-i].color==="black") {
       newTabel[rowIndex+i][colIndex-i].enemy=true
       break
     } 
     
     }
     for(let i=1; i<8; i++){
      if(rowIndex-i===-1||colIndex+i===8)break
      if(newTabel[rowIndex-i][colIndex+i].color==="white") break
      console.log(`colindex`,colIndex)
      console.log(rowIndex)
      if(newTabel[rowIndex-i][colIndex+i].color!=="white") newTabel[rowIndex-i][colIndex+i].canMove=true
      if(newTabel[rowIndex-i][colIndex+i].color==="black") {
       newTabel[rowIndex-i][colIndex+i].enemy=true
       break
     } 
     
     }

     setTabel(newTabel)
 }

 if(tabel[rowIndex][colIndex].name==="knight"){
    const newTabel = [...tabel]
    newTabel[rowIndex][colIndex].selected=true


  
  //check for emeny in the up right
   
  if (newTabel && newTabel[rowIndex - 2] && newTabel[rowIndex - 2][colIndex + 1]) {
        if(newTabel[rowIndex-2][colIndex+1].color!=="white"){
       
        if(newTabel[rowIndex-2][colIndex+1].color==="black") {
          newTabel[rowIndex-2][colIndex+1].enemy=true
        } 
       else newTabel[rowIndex-2][colIndex+1].canMove=true 
    }
}
 //check for emeny in the up left
 if (newTabel && newTabel[rowIndex - 2] && newTabel[rowIndex - 2][colIndex -1]) {
        if(newTabel[rowIndex-2][colIndex-1].color!=="white"){
        if(newTabel[rowIndex-2][colIndex-1].color==="black") {
          newTabel[rowIndex-2][colIndex-1].enemy=true
        } 
       else newTabel[rowIndex-2][colIndex-1].canMove=true 
    }
}


 //check for emeny in the down right
  
 if (newTabel && newTabel[rowIndex +2] && newTabel[rowIndex + 2][colIndex + 1])  {
    if(newTabel[rowIndex+2][colIndex+1].color!=="white"){
   
    if(newTabel[rowIndex+2][colIndex+1].color==="black") {
      newTabel[rowIndex+2][colIndex+1].enemy=true
    } 
   else newTabel[rowIndex+2][colIndex+1].canMove=true 
}
}
//check for emeny in the down left
if (newTabel?.[rowIndex + 2]?.[colIndex -1])  {
    if(newTabel[rowIndex+2][colIndex-1].color!=="white"){
    if(newTabel[rowIndex+2][colIndex-1].color==="black") {
      newTabel[rowIndex+2][colIndex-1].enemy=true
    } 
   else newTabel[rowIndex+2][colIndex-1].canMove=true 
}
}

//check for availabel moves horizonatl left
if (newTabel?.[rowIndex-1]?.[colIndex -2])  {
    if(newTabel[rowIndex-1][colIndex-2].color!=="white"){
    if(newTabel[rowIndex-1][colIndex-2].color==="black") {
      newTabel[rowIndex-1][colIndex-2].enemy=true
    } 
   else newTabel[rowIndex-1][colIndex-2].canMove=true 
}
}
if (newTabel?.[rowIndex+1]?.[colIndex -2])  {
    if(newTabel[rowIndex+1][colIndex-2].color!=="white"){
    if(newTabel[rowIndex+1][colIndex-2].color==="black") {
      newTabel[rowIndex+1][colIndex-2].enemy=true
    } 
   else newTabel[rowIndex+1][colIndex-2].canMove=true 
}
}
//check for availabel moves horizontal right
if (newTabel?.[rowIndex-1]?.[colIndex +2])  {
    if(newTabel[rowIndex-1][colIndex+2].color!=="white"){
    if(newTabel[rowIndex-1][colIndex+2].color==="black") {
      newTabel[rowIndex-1][colIndex+2].enemy=true
    } 
   else newTabel[rowIndex-1][colIndex+2].canMove=true 
}
}
if (newTabel?.[rowIndex+1]?.[colIndex +2])  {
    if(newTabel[rowIndex+1][colIndex+2].color!=="white"){
    if(newTabel[rowIndex+1][colIndex+2].color==="black") {
      newTabel[rowIndex+1][colIndex+2].enemy=true
    } 
   else newTabel[rowIndex+1][colIndex+2].canMove=true 
}
}






    setTabel(newTabel)   
  }

  if(tabel[rowIndex][colIndex].name==="king"){
    const newTabel = [...tabel]
    newTabel[rowIndex][colIndex].selected=true

    //check for possible moves up
    if (newTabel && newTabel[rowIndex - 1] && newTabel[rowIndex - 1][colIndex]) {
      if(newTabel[rowIndex-1][colIndex].color!=="white"){
     
      if(newTabel[rowIndex-1][colIndex].color==="black") {
        newTabel[rowIndex-1][colIndex].enemy=true
      } 
     else newTabel[rowIndex-1][colIndex].canMove=true 
  }
}

    //check for possible moves down
    if (newTabel && newTabel[rowIndex+1] && newTabel[rowIndex +1][colIndex]) {
      if(newTabel[rowIndex+1][colIndex].color!=="white"){
     
      if(newTabel[rowIndex+1][colIndex].color==="black") {
        newTabel[rowIndex+1][colIndex].enemy=true
      } 
     else newTabel[rowIndex+1][colIndex].canMove=true 
  }
}
    //check for possible moves left
    if (newTabel && newTabel[rowIndex-1] && newTabel[rowIndex ][colIndex-1]) {
      if(newTabel[rowIndex][colIndex-1].color!=="white"){
     
      if(newTabel[rowIndex][colIndex-1].color==="black") {
        newTabel[rowIndex][colIndex-1].enemy=true
      } 
     else newTabel[rowIndex][colIndex-1].canMove=true 
  }
}
    //check for possible moves right
    if (newTabel && newTabel[rowIndex] && newTabel[rowIndex ][colIndex+1]) {
      if(newTabel[rowIndex][colIndex+1].color!=="white"){
     
      if(newTabel[rowIndex][colIndex+1].color==="black") {
        newTabel[rowIndex][colIndex+1].enemy=true
      } 
     else newTabel[rowIndex][colIndex+1].canMove=true 
  }
}
    //check for possible moves top right
    if (newTabel && newTabel[rowIndex-1] && newTabel[rowIndex-1 ][colIndex+1]) {
      if(newTabel[rowIndex-1][colIndex+1].color!=="white"){
     
      if(newTabel[rowIndex-1][colIndex+1].color==="black") {
        newTabel[rowIndex-1][colIndex+1].enemy=true
      } 
     else newTabel[rowIndex-1][colIndex+1].canMove=true 
  }
}
    //check for possible moves top left
    if (newTabel && newTabel[rowIndex-1] && newTabel[rowIndex-1 ][colIndex-1]) {
      if(newTabel[rowIndex-1][colIndex-1].color!=="white"){
     
      if(newTabel[rowIndex-1][colIndex-1].color==="black") {
        newTabel[rowIndex-1][colIndex-1].enemy=true
      } 
     else newTabel[rowIndex-1][colIndex-1].canMove=true 
  }
}
    //check for possible moves bootom right
    if (newTabel && newTabel[rowIndex+1] && newTabel[rowIndex+1 ][colIndex+1]) {
      if(newTabel[rowIndex+1][colIndex+1].color!=="white"){
     
      if(newTabel[rowIndex+1][colIndex+1].color==="black") {
        newTabel[rowIndex+1][colIndex+1].enemy=true
      } 
     else newTabel[rowIndex+1][colIndex+1].canMove=true 
  }
}
    //check for possible moves bottom left
    if (newTabel && newTabel[rowIndex+1] && newTabel[rowIndex+1 ][colIndex-1]) {
      if(newTabel[rowIndex+1][colIndex-1].color!=="white"){
     
      if(newTabel[rowIndex+1][colIndex-1].color==="black") {
        newTabel[rowIndex+1][colIndex-1].enemy=true
      } 
     else newTabel[rowIndex+1][colIndex-1].canMove=true 
  }
}
   setTabel(newTabel)


  }

  if(tabel[rowIndex][colIndex].name==="pawn"){
    const newTabel = [...tabel]
    newTabel[rowIndex][colIndex].selected=true

    //check for possible moves up
     if(newTabel[rowIndex][colIndex].firstTimeMove){
      newTabel[rowIndex-1][colIndex].canMove=true
      newTabel[rowIndex-2][colIndex].canMove=true
      setTabel(newTabel)
     }


    if(!newTabel[rowIndex][colIndex].firstTimeMove){
    if (newTabel && newTabel[rowIndex - 1] && newTabel[rowIndex - 1][colIndex]) {
      if(newTabel[rowIndex-1][colIndex].color==="") newTabel[rowIndex-1][colIndex].canMove=true 
      if(newTabel[rowIndex - 1][colIndex-1]){
      if(newTabel[rowIndex-1][colIndex+1].color==="black") newTabel[rowIndex-1][colIndex+1].enemy=true
      if(newTabel[rowIndex-1][colIndex-1].color==="black") newTabel[rowIndex-1][colIndex-1].enemy=true
    }
    if(newTabel[rowIndex - 1][colIndex+1]){
      if(newTabel[rowIndex-1][colIndex+1].color==="black") newTabel[rowIndex-1][colIndex+1].enemy=true
      if(newTabel[rowIndex-1][colIndex-1].color==="black") newTabel[rowIndex-1][colIndex-1].enemy=true
    }
     setTabel(newTabel)
}
  }


}

  }


  // possible moves for black figures

  if(tabel[rowIndex][colIndex].color==="black"&&user.player===2){
  
    if(tabel[rowIndex][colIndex].name==="rook"){
        const newTabel = [...tabel]
        newTabel[rowIndex][colIndex].selected=true
   
      //check for emeny in the right
        for(let i=colIndex+1; i<8; i++){
         if(newTabel[rowIndex][i].color==="black") break
         if(newTabel[rowIndex][i].color!=="black") newTabel[rowIndex][i].canMove=true
         if(newTabel[rowIndex][i].color==="white") {
           newTabel[rowIndex][i].enemy=true
           break
         }    
        }
       //check for possibble move and enemy in the left
        for(let i=colIndex-1; i>=0; i--){
         // console.log(i)
         if(newTabel[rowIndex][i].color==="black") break
         if(newTabel[rowIndex][i].color!=="black") newTabel[rowIndex][i].canMove=true
         if(newTabel[rowIndex][i].color==="white") {
           newTabel[rowIndex][i].enemy=true
           break
         } 
       }
       //check for possibble move and enemy emeny up
       for(let i=rowIndex-1; i>=0; i--){
         // console.log(`colindex`,colIndex)
         // console.log(i)
         if(newTabel[i][colIndex].color==="black") break
         
         if(newTabel[i][colIndex].color!=="black")  newTabel[i][colIndex].canMove=true 
         
         if(newTabel[i][colIndex].color==="white") {
           newTabel[i][colIndex].enemy=true
           break
         } 
       }
     //check for possibble move and enemy emeny down
       for(let i=rowIndex+1; i<8; i++){
         //  console.log(`colindex`,colIndex)
         //   console.log(i)
         if(newTabel[i][colIndex].color==="black") break
         console.log(`colindex`,colIndex)
         console.log(i)
         if(newTabel[i][colIndex].color!=="black") newTabel[i][colIndex].canMove=true
         if(newTabel[i][colIndex].color==="white") {
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
      if(newTabel[rowIndex][i].color==="black") break
      if(newTabel[rowIndex][i].color!=="black") newTabel[rowIndex][i].canMove=true
      if(newTabel[rowIndex][i].color==="white") {
        newTabel[rowIndex][i].enemy=true
        break
      }    
     }
    //check for possibble move and enemy in the left
     for(let i=colIndex-1; i>=0; i--){
      // console.log(i)
      if(newTabel[rowIndex][i].color==="black") break
      if(newTabel[rowIndex][i].color!=="black") newTabel[rowIndex][i].canMove=true
      if(newTabel[rowIndex][i].color==="white") {
        newTabel[rowIndex][i].enemy=true
        break
      } 
    }
    //check for possibble move and enemy emeny up
    for(let i=rowIndex-1; i>=0; i--){
      // console.log(`colindex`,colIndex)
      // console.log(i)
      if(newTabel[i][colIndex].color==="black") break
      
      if(newTabel[i][colIndex].color!=="black")  newTabel[i][colIndex].canMove=true 
      
      if(newTabel[i][colIndex].color==="white") {
        newTabel[i][colIndex].enemy=true
        break
      } 
    }
   //check for possibble move and enemy emeny down
    for(let i=rowIndex+1; i<8; i++){
      //  console.log(`colindex`,colIndex)
      //   console.log(i)
      if(newTabel[i][colIndex].color==="black") break
      console.log(`colindex`,colIndex)
      console.log(i)
      if(newTabel[i][colIndex].color!=="black") newTabel[i][colIndex].canMove=true
      if(newTabel[i][colIndex].color==="white") {
       newTabel[i][colIndex].enemy=true
       break
    } 
   }
   
   //check for possibble move and enemy emeny in \ diagonal up
    for(let i=1; i<8; i++){
      if(rowIndex+i===8||colIndex+i===8)break
     if(newTabel[rowIndex+i][colIndex+i].color==="black") break
     console.log(`colindex`,colIndex)
     console.log(rowIndex)
     if(newTabel[rowIndex+i][colIndex+i].color!=="black") newTabel[rowIndex+i][colIndex+i].canMove=true
     if(newTabel[rowIndex+i][colIndex+i].color==="white") {
      newTabel[rowIndex+i][colIndex+i].enemy=true
      break
    } 
    
    
    }
    for(let i=1; i<8; i++){
     if(rowIndex-i===-1||colIndex-i===-1)break
     if(newTabel[rowIndex-i][colIndex-i].color==="black") break
     console.log(`colindex`,colIndex)
     console.log(rowIndex)
     if(newTabel[rowIndex-i][colIndex-i].color!=="black") newTabel[rowIndex-i][colIndex-i].canMove=true
     if(newTabel[rowIndex-i][colIndex-i].color==="white") {
      newTabel[rowIndex-i][colIndex-i].enemy=true
      break
    } 
    
    }
 
      //check for possibble move and enemy emeny in / diagonal up
      for(let i=1; i<8; i++){
         if(rowIndex+i===8||colIndex-i===-1)break
        if(newTabel[rowIndex+i][colIndex-i].color==="black") break
        console.log(`colindex`,colIndex)
        console.log(rowIndex)
        if(newTabel[rowIndex+i][colIndex-i].color!=="black") newTabel[rowIndex+i][colIndex-i].canMove=true
        if(newTabel[rowIndex+i][colIndex-i].color==="white") {
         newTabel[rowIndex+i][colIndex-i].enemy=true
         break
       } 
       
       }
       for(let i=1; i<8; i++){
        if(rowIndex-i===-1||colIndex+i===8)break
        if(newTabel[rowIndex-i][colIndex+i].color==="black") break
        console.log(`colindex`,colIndex)
        console.log(rowIndex)
        if(newTabel[rowIndex-i][colIndex+i].color!=="black") newTabel[rowIndex-i][colIndex+i].canMove=true
        if(newTabel[rowIndex-i][colIndex+i].color==="white") {
         newTabel[rowIndex-i][colIndex+i].enemy=true
         break
       } 
       
       }
   
     setTabel(newTabel)
     
   }
 
     if(tabel[rowIndex][colIndex].name==="bishop"){
     const newTabel = [...tabel]
     newTabel[rowIndex][colIndex].selected=true
          //check for possibble move and enemy emeny in \ diagonal up
    for(let i=1; i<8; i++){
     if(rowIndex+i===8||colIndex+i===8)break
    if(newTabel[rowIndex+i][colIndex+i].color==="black") break
    console.log(`colindex`,colIndex)
    console.log(rowIndex)
    if(newTabel[rowIndex+i][colIndex+i].color!=="black") newTabel[rowIndex+i][colIndex+i].canMove=true
    if(newTabel[rowIndex+i][colIndex+i].color==="white") {
     newTabel[rowIndex+i][colIndex+i].enemy=true
     break
   } 
   
   
   }
   for(let i=1; i<8; i++){
    if(rowIndex-i===-1||colIndex-i===-1)break
    if(newTabel[rowIndex-i][colIndex-i].color==="black") break
    console.log(`colindex`,colIndex)
    console.log(rowIndex)
    if(newTabel[rowIndex-i][colIndex-i].color!=="black") newTabel[rowIndex-i][colIndex-i].canMove=true
    if(newTabel[rowIndex-i][colIndex-i].color==="white") {
     newTabel[rowIndex-i][colIndex-i].enemy=true
     break
   } 
   
   }
 
     //check for possibble move and enemy emeny in / diagonal up
     for(let i=1; i<8; i++){
        if(rowIndex+i===8||colIndex-i===-1)break
       if(newTabel[rowIndex+i][colIndex-i].color==="black") break
       console.log(`colindex`,colIndex)
       console.log(rowIndex)
       if(newTabel[rowIndex+i][colIndex-i].color!=="black") newTabel[rowIndex+i][colIndex-i].canMove=true
       if(newTabel[rowIndex+i][colIndex-i].color==="white") {
        newTabel[rowIndex+i][colIndex-i].enemy=true
        break
      } 
      
      }
      for(let i=1; i<8; i++){
       if(rowIndex-i===-1||colIndex+i===8)break
       if(newTabel[rowIndex-i][colIndex+i].color==="black") break
       console.log(`colindex`,colIndex)
       console.log(rowIndex)
       if(newTabel[rowIndex-i][colIndex+i].color!=="black") newTabel[rowIndex-i][colIndex+i].canMove=true
       if(newTabel[rowIndex-i][colIndex+i].color==="white") {
        newTabel[rowIndex-i][colIndex+i].enemy=true
        break
      } 
      
      }
 
      setTabel(newTabel)
  }
 
  if(tabel[rowIndex][colIndex].name==="knight"){
     const newTabel = [...tabel]
     newTabel[rowIndex][colIndex].selected=true
 
 
   
   //check for emeny in the up right
    
   if (newTabel && newTabel[rowIndex - 2] && newTabel[rowIndex - 2][colIndex + 1]) {
         if(newTabel[rowIndex-2][colIndex+1].color!=="black"){
        
         if(newTabel[rowIndex-2][colIndex+1].color==="white") {
           newTabel[rowIndex-2][colIndex+1].enemy=true
         } 
        else newTabel[rowIndex-2][colIndex+1].canMove=true 
     }
 }
  //check for emeny in the up left
  if (newTabel && newTabel[rowIndex - 2] && newTabel[rowIndex - 2][colIndex -1]) {
         if(newTabel[rowIndex-2][colIndex-1].color!=="black"){
         if(newTabel[rowIndex-2][colIndex-1].color==="white") {
           newTabel[rowIndex-2][colIndex-1].enemy=true
         } 
        else newTabel[rowIndex-2][colIndex-1].canMove=true 
     }
 }
 
 
  //check for emeny in the down right
   
  if (newTabel && newTabel[rowIndex +2] && newTabel[rowIndex + 2][colIndex + 1])  {
     if(newTabel[rowIndex+2][colIndex+1].color!=="black"){
    
     if(newTabel[rowIndex+2][colIndex+1].color==="white") {
       newTabel[rowIndex+2][colIndex+1].enemy=true
     } 
    else newTabel[rowIndex+2][colIndex+1].canMove=true 
 }
 }
 //check for emeny in the down left
 if (newTabel?.[rowIndex + 2]?.[colIndex -1])  {
     if(newTabel[rowIndex+2][colIndex-1].color!=="black"){
     if(newTabel[rowIndex+2][colIndex-1].color==="white") {
       newTabel[rowIndex+2][colIndex-1].enemy=true
     } 
    else newTabel[rowIndex+2][colIndex-1].canMove=true 
 }
 }
 
 //check for availabel moves horizonatl left
 if (newTabel?.[rowIndex-1]?.[colIndex -2])  {
     if(newTabel[rowIndex-1][colIndex-2].color!=="black"){
     if(newTabel[rowIndex-1][colIndex-2].color==="white") {
       newTabel[rowIndex-1][colIndex-2].enemy=true
     } 
    else newTabel[rowIndex-1][colIndex-2].canMove=true 
 }
 }
 if (newTabel?.[rowIndex+1]?.[colIndex -2])  {
     if(newTabel[rowIndex+1][colIndex-2].color!=="black"){
     if(newTabel[rowIndex+1][colIndex-2].color==="white") {
       newTabel[rowIndex+1][colIndex-2].enemy=true
     } 
    else newTabel[rowIndex+1][colIndex-2].canMove=true 
 }
 }
 //check for availabel moves horizontal right
 if (newTabel?.[rowIndex-1]?.[colIndex +2])  {
     if(newTabel[rowIndex-1][colIndex+2].color!=="black"){
     if(newTabel[rowIndex-1][colIndex+2].color==="white") {
       newTabel[rowIndex-1][colIndex+2].enemy=true
     } 
    else newTabel[rowIndex-1][colIndex+2].canMove=true 
 }
 }
 if (newTabel?.[rowIndex+1]?.[colIndex +2])  {
     if(newTabel[rowIndex+1][colIndex+2].color!=="black"){
     if(newTabel[rowIndex+1][colIndex+2].color==="white") {
       newTabel[rowIndex+1][colIndex+2].enemy=true
     } 
    else newTabel[rowIndex+1][colIndex+2].canMove=true 
 }
 }
 
     setTabel(newTabel)   
   }
 
   if(tabel[rowIndex][colIndex].name==="king"){
     const newTabel = [...tabel]
     newTabel[rowIndex][colIndex].selected=true
 
     //check for possible moves up
     if (newTabel && newTabel[rowIndex - 1] && newTabel[rowIndex - 1][colIndex]) {
       if(newTabel[rowIndex-1][colIndex].color!=="black"){
      
       if(newTabel[rowIndex-1][colIndex].color==="white") {
         newTabel[rowIndex-1][colIndex].enemy=true
       } 
      else newTabel[rowIndex-1][colIndex].canMove=true 
   }
 }
 
     //check for possible moves down
     if (newTabel && newTabel[rowIndex+1] && newTabel[rowIndex +1][colIndex]) {
       if(newTabel[rowIndex+1][colIndex].color!=="black"){
      
       if(newTabel[rowIndex+1][colIndex].color==="white") {
         newTabel[rowIndex+1][colIndex].enemy=true
       } 
      else newTabel[rowIndex+1][colIndex].canMove=true 
   }
 }
     //check for possible moves left
     if (newTabel && newTabel[rowIndex-1] && newTabel[rowIndex ][colIndex-1]) {
       if(newTabel[rowIndex][colIndex-1].color!=="black"){
      
       if(newTabel[rowIndex][colIndex-1].color==="white") {
         newTabel[rowIndex][colIndex-1].enemy=true
       } 
      else newTabel[rowIndex][colIndex-1].canMove=true 
   }
 }
     //check for possible moves right
     if (newTabel && newTabel[rowIndex] && newTabel[rowIndex ][colIndex+1]) {
       if(newTabel[rowIndex][colIndex+1].color!=="black"){
      
       if(newTabel[rowIndex][colIndex+1].color==="white") {
         newTabel[rowIndex][colIndex+1].enemy=true
       } 
      else newTabel[rowIndex][colIndex+1].canMove=true 
   }
 }
     //check for possible moves top right
     if (newTabel && newTabel[rowIndex-1] && newTabel[rowIndex-1 ][colIndex+1]) {
       if(newTabel[rowIndex-1][colIndex+1].color!=="black"){
      
       if(newTabel[rowIndex-1][colIndex+1].color==="white") {
         newTabel[rowIndex-1][colIndex+1].enemy=true
       } 
      else newTabel[rowIndex-1][colIndex+1].canMove=true 
   }
 }
     //check for possible moves top left
     if (newTabel && newTabel[rowIndex-1] && newTabel[rowIndex-1 ][colIndex-1]) {
       if(newTabel[rowIndex-1][colIndex-1].color!=="black"){
      
       if(newTabel[rowIndex-1][colIndex-1].color==="white") {
         newTabel[rowIndex-1][colIndex-1].enemy=true
       } 
      else newTabel[rowIndex-1][colIndex-1].canMove=true 
   }
 }
     //check for possible moves bootom right
     if (newTabel && newTabel[rowIndex+1] && newTabel[rowIndex+1 ][colIndex+1]) {
       if(newTabel[rowIndex+1][colIndex+1].color!=="black"){
      
       if(newTabel[rowIndex+1][colIndex+1].color==="white") {
         newTabel[rowIndex+1][colIndex+1].enemy=true
       } 
      else newTabel[rowIndex+1][colIndex+1].canMove=true 
   }
 }
     //check for possible moves bottom left
     if (newTabel && newTabel[rowIndex+1] && newTabel[rowIndex+1 ][colIndex-1]) {
       if(newTabel[rowIndex+1][colIndex-1].color!=="black"){
      
       if(newTabel[rowIndex+1][colIndex-1].color==="white") {
         newTabel[rowIndex+1][colIndex-1].enemy=true
       } 
      else newTabel[rowIndex+1][colIndex-1].canMove=true 
   }
 }
    setTabel(newTabel)
 
 
   }
 
   if(tabel[rowIndex][colIndex].name==="pawn"){
     const newTabel = [...tabel]
     newTabel[rowIndex][colIndex].selected=true
 
     //check for possible moves up
      if(newTabel[rowIndex][colIndex].firstTimeMove){
       newTabel[rowIndex+1][colIndex].canMove=true
       newTabel[rowIndex+2][colIndex].canMove=true
       setTabel(newTabel)
      }
 
 
     if(!newTabel[rowIndex][colIndex].firstTimeMove){
     if (newTabel && newTabel[rowIndex + 1] && newTabel[rowIndex +1][colIndex]) {
       if(newTabel[rowIndex+1][colIndex].color==="") newTabel[rowIndex+1][colIndex].canMove=true 
       if(newTabel[rowIndex +1][colIndex+1]){
       if(newTabel[rowIndex+1][colIndex-1].color==="white") newTabel[rowIndex+1][colIndex-1].enemy=true
       if(newTabel[rowIndex+1][colIndex+1].color==="white") newTabel[rowIndex+1][colIndex+1].enemy=true
     }
     if(newTabel[rowIndex +1][colIndex-1]){
       if(newTabel[rowIndex+1][colIndex-1].color==="white") newTabel[rowIndex+1][colIndex-1].enemy=true
       if(newTabel[rowIndex+1][colIndex+1].color==="white") newTabel[rowIndex+1][colIndex+1].enemy=true
     }
      setTabel(newTabel)
 }
   }
 
 
 }
 
   }
}