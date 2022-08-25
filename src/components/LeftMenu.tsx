import { useState } from "react"

export function LeftMenu({setUseHint}:any){
    const[possibleHints,setPossibleHints]=useState(5)
    return(
        <div className='leftmenu'>
         <button className='hint' onClick={()=>{
            setUseHint(true)
            setPossibleHints(possibleHints-1)}}> Hint💡 <span className="possibleHints">{possibleHints}</span></button>
         <button className='reset'>Reset Game</button>
        </div>
    )
}