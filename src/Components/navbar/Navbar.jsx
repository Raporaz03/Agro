import "./navbar.css"
import PersonIcon from '@mui/icons-material/Person';
export default function Navbar() {
  return (
    <div className='navbarWrapper'>
      <div className='navbarWapperLeft'>
        <button>Home</button>
        <button>About</button>
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
