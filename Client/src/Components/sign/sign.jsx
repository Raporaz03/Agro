import "./sign.css";
import { Link } from 'react-router-dom';
import userContext from '../../Context/userContext/userContext';
import { useContext } from "react";
export default function Sign(props) {
    const {mainUser, setMainUser} = useContext(userContext);
    const host = "http://localhost:5000/api/auth"
    const handleClick = ()=>{
        try {
            const res = axios.post(`${host}/register`)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <input type="text" placeholder='Full Name' />
            <input type="text" placeholder='Phone number' />
            <input type="text" placeholder='New Password' />
            <input type="text" placeholder='Confirm Password' />
            <button>Sign Up</button>
            <div className='SignLog'>
                <span>Already have a Account?</span>
                <Link to="/login" className='SignLogLink'>LogIn</Link>
            </div>
        </>
    )
}