import "./navbar.css"
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router";
export default function Navbar() {
  const navigate = useNavigate();
  const handleClick = (e)=>{
    navigate(e.target.name);
  }

  return (
    <div className='navbarWrapper'>
      <div className='navbarWapperLeft'>
        <button name="" onClick={handleClick}>Home</button>
        <button name="about" onClick={handleClick}>About</button>
        <button>News</button>
        <button>Programmes and Schemes</button>
      </div>
      <div className="searchBar">
        <input type="text" placeholder="Search here"/>
      </div>
      <div className='navbarWapperRight'>
        <PersonIcon className="navbarIcons"/>
        <span>Username</span>
      </div>
    </div>
  )
}
