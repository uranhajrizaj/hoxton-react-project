export function CheckWinner(state:any,setWinner:any,user:any){

  for(let row of state.board){
    for(let cell of row){
        if(!(cell.name==="king"&&cell.color==="black")) setWinner(user)
        if(!(cell.name==="king"&&cell.color==="white")) setWinner(user)
        console.log(user)
    }
  }
}