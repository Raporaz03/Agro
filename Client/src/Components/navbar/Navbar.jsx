import "./navbar.css"
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate(e.target.name);
  }

  return (
    <div className='navbarWrapper'>
      <div className='navbarWapperLeft'>
        <button name="" onClick={handleClick}>Home</button>
        <button name="about" onClick={handleClick}>About</button>
        <button name="news" onClick={handleClick}>News</button>
        <button>Programmes and Schemes</button>
      </div>
      <div className="searchBar">
        <input type="text" placeholder="Search here" />
      </div>
      <div className='navbarWapperRight'>
        <div className="dropdown">
          <button className="userBtn btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <PersonIcon className="navbarIcons" />
            username
          </button>
          <ul className="dropdown-menu mt-2">
            <li><Link className="dropdown-item" to='/signup'>Sign up</Link></li>
            <li><Link className="dropdown-item" to='/login'>Log out</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
