import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./homepage.css"
export function HomePage({setUser}:any){

const[error,setError]=useState(false)

const navigate=useNavigate()

  function signIn(event:any){
    event.preventDefault()
    const email=event.target.email.value
    const password=event.target.password.value
      fetch(`http://localhost:3005/users/${email}`)
                    .then((response)=>response.json())
                    .then(user=>{
                      if(user.password===password) {
                        setUser(user)
                         navigate('/chess_game')
                      }
                      else{ setError(true)}
                    })  
                  }
    return(
       <div className="countainer">
              <form className="signin-form" 
                 onSubmit={(e)=>{
                    signIn(e) 
                    }}>
                <h1>Sign In</h1>
                <input placeholder="Your email" type="email" required name="email"/> 
                <input placeholder="Your password" type="password" required name="password"/>
                {error && <p className="error">* Wrong email or password. Please try again. * </p>}
                <button>Sign In</button>
               

              </form>
       </div> 
    )
}