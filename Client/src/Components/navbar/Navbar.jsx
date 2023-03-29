import "./navbar.css"
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate(e.target.name);
  }
  const userId = localStorage.getItem('userId');
  const handleLogout = () => {
    localStorage.removeItem('userId');
  }

  return (
    <div className='navbarWrapper'>
      <div className='navbarWapperLeft'>
        <button name="" onClick={handleClick}>Home</button>
        <button name="about" onClick={handleClick}>About</button>
        <button name="news" onClick={handleClick}>News</button>
      </div>
      <div className="searchBar">
        <input type="text" placeholder="Search here" />
      </div>
      <div className='navbarWapperRight'>
        {userId ? <div className="dropdown">
          <button className="userBtn btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <PersonIcon className="navbarIcons" />
            {}
          </button>
          <ul className="dropdown-menu mt-2">
            <li><Link className="dropdown-item" to='/signup'>Sign up</Link></li>
            <li><Link onClick={handleLogout} className="dropdown-item" to='/login'>Log out</Link></li>
          </ul>
        </div> :
          <div className="d-flex">
            <Link className="navbarBtn mx-2" to="/login" >Login</Link>
            <Link className="navbarBtn mx-2" to="/signup" >SignUp</Link>
          </div>}
      </div>
    </div>
  )
}
