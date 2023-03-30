import "./sign.css";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import userContext from '../../Context/userContext/userContext';
import { useContext, useState } from "react";
export default function Sign(props) {
    const {createUser} = useContext(userContext);
    const [credentials, setCredentials] = useState({ fullname: "", phone: "", password: "", confirmPassword:"" });
    const handleClick = (e)=>{
        e.preventDefault();
        try {
            const {fullname, phone, password} = credentials;
            createUser(fullname, phone, password);
        } catch (error) {
            console.log(error);
        }
    }
    const handleChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <>
            <input type="text" name="fullname" placeholder='Full Name' value={credentials.fullname}  onChange={handleChange}/>
            <input type="text" name="phone" placeholder='Phone number' value={credentials.phone}  onChange={handleChange}/>
            <input type="password" name="password" placeholder='New Password' value={credentials.password}  onChange={handleChange}/>
            <input type="password" name="confirmPassword" placeholder='Confirm Password' value={credentials.confirmPassword} onChange={handleChange} />
            <button onClick={handleClick}>Sign Up</button>
            <div className='SignLog'>
                <span>Already have a Account?</span>
                <Link onClick={props.click} to="/login" className='SignLogLink'>LogIn</Link>
            </div>
        </>
    )
}