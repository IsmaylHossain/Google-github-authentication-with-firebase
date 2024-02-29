 
import { NavLink } from 'react-router-dom';
 
const Navber = () => {
    return (
        <div>
            <div className='nev flex mt-0'>
            <NavLink className="card" to ="/" >Home</NavLink> 
            <NavLink className='card' to ="/email" >Login</NavLink>
            <NavLink className='card' to ="/google" >Google</NavLink>
            <NavLink className='card' to = "/Register">Register</NavLink>

            </div>
        </div>
    );
};

export default Navber;