import { useEffect, useState } from "react";
import { ChessBoard } from "./ChessBoard";

import { Hedaer } from "./Header";
import { LeftMenu } from "./LeftMenu";
import { RightMenu } from "./RightMenu";

export function PlayPage({user}:any){
    const[tabel , setTabel] = useState([])
    const[usehint,setUseHint]=useState(false)
    const[userssignin,setUsersSignin]=useState([])
    useEffect(() => {
        fetch(`http://localhost:3005/sign_in`)
        .then((response)=>response.json())
        .then(usersFromServer=>setUsersSignin(usersFromServer))
  
    }, []);

    useEffect(() => {
      const Interval1= setInterval(() => {
        if(userssignin.length===2) clearInterval(Interval1)
        fetch(`http://localhost:3005/sign_in`)
        .then((response)=>response.json())
        .then(usersFromServer=>setUsersSignin(usersFromServer))
         
        }, 1000);
      }, []);

    useEffect(() => {
    setInterval(() => {
        fetch(`http://localhost:3005/board`)
        .then((response)=>response.json())
        .then(boardFromServer=>setTabel(boardFromServer))


      }, 5000);
    }, []);

    return (
        <>
        {userssignin.length===2 ?
          <>
        <Hedaer user={user}/>
      <div className='main'>
          <LeftMenu setUseHint={setUseHint}/>
          <ChessBoard tabel={tabel} setTabel={setTabel} usehint={usehint} setUseHint={setUseHint} userssignin={userssignin} user={user}/>
          <RightMenu/>
      </div>
      </> : <div className="loading"> <div className="loading_message" ><h1>Loading....</h1> <h3>Waiting for your friend to conect!</h3></div> </div>
}
      </>
    )
}