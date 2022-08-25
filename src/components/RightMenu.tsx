import { FaPaperPlane } from "react-icons/fa";
export function RightMenu(){
//  const[]=useState
    return(
        <div className='right_menu'>
        <div className='friend'>
         <img src="https://images.pexels.com/photos/411207/pexels-photo-411207.jpeg?auto=compress&cs=tinysrgb&w=600"/>
         <h4>Uran</h4>
        </div>
        <div className="messages">
          <ul>
            <li>Nice move</li>
          </ul>
        </div>
        <div className='sent'>
          <form  className="form" ><input placeholder="Enter your message..."/> <button><FaPaperPlane /></button></form>
        </div>

      </div>
    )
}