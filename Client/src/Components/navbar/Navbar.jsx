import "./navbar.css"
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router";
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
            <li><a className="dropdown-item" href="#">Sign up</a></li>
            <li><a className="dropdown-item" href="#">Log out</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
