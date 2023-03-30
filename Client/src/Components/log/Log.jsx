import "./log.css";
import { Link } from 'react-router-dom';
import userContext from "../../Context/userContext/userContext";
import { useContext, useState } from "react";
export default function Log(props) {

    const {loginUser} = useContext(userContext);
    const [credentials, setCredentials] = useState({phone: "", password: ""});
    const handleClick = (e)=>{
        e.preventDefault();
        try {
            const {phone, password} = credentials;
            loginUser(phone, password);
        } catch (error) {
            console.log(error);
        }
    }
    const handleChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <>
            <input type="text" placeholder='phone number' name="phone" onChange={handleChange} />
            <input type="password" placeholder='password' name="password" onChange={handleChange} />
            <Link className='forgot'>Forgot Password</Link>
            <button onClick={handleClick} >Log In</button>
            <div className='loginSign'>
                <span>New?</span>
                <Link onClick={props.click} to="/signup" className='loginSignLink'>Sign Up</Link>
            </div>
        </>
    )
}
