export function LeftMenu({setUseHint}:any){
    return(
        <div className='leftmenu'>
         <button className='hint' onClick={()=>{setUseHint(true)}}> Hint💡</button>
         <button className='reset'>Reset Game</button>
        </div>
    )
}