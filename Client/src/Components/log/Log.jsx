import "./log.css";
import { Link } from 'react-router-dom';
export default function Log(props) {
    return (
        <>
            <input type="text" placeholder='username' />
            <input type="text" placeholder='password' />
            <Link className='forgot'>Forgot Password</Link>
            <button>Log In</button>
            <div className='loginSign'>
                <span>New?</span>
                <Link to="/signup" className='loginSignLink'>Sign Up</Link>
            </div>
        </>
    )
}
