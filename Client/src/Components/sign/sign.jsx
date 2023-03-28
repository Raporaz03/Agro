import "./sign.css";
import { Link } from 'react-router-dom';
export default function Sign(props) {
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