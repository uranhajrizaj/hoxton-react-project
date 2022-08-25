export function Hedaer({user}:any){
    
    return(
        <>
        <div className='header'>
        <h1> Chess game</h1>
        <div className='user-info'>
         <img src={user.image}/>
         <h3>{user.name}</h3>
        </div>
        </div>
        </>
    )
}