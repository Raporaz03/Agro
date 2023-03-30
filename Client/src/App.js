import './App.css';
import Navbar from './Components/navbar/Navbar';
import Sidebar from './Components/sidebar/Sidebar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './Pages/home/Home';
import About from './Pages/about/About';
import News from './Pages/news/News';
import Profile from './Pages/profile/Profile';
import Equipment from './Pages/equipment/Equipment';
import Workforce from './Pages/workforce/Workforce';
import Specialists from './Pages/specialists/Specialists';
import Stores from './Pages/stores/Stores';
import Finance from './Pages/finance/Finance';
import Majorcrops from './Pages/majorcrops/Majorcrops';
import Login from './Pages/login/Login';
import { useContext, useEffect } from 'react';
import userContext from './Context/userContext/userContext';


function App() {
  const authToken = localStorage.getItem('token');
  const apiKey = process.env.REACT_APP_NEWS_API;
  const {getMainUser} = useContext(userContext);
  useEffect(()=>{
    if(authToken)
      getMainUser();
  }, []);

  return (
        <div className='App'>
          <Navbar />
          <div className='mainApp'>
            <Sidebar />
            <div className='mainAppPage'>
              <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Login />} />
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/news" element={<News key="general" apiKey={apiKey} country="in" category="science" />}></Route>
                <Route exact path="/profile" element={<Profile />} />
                <Route exact path="/equipment" element={<Equipment />} />
                <Route exact path="/workforce" element={<Workforce />} />
                <Route exact path="/specialists" element={<Specialists />} />
                <Route exact path="/stores" element={<Stores />} />
                <Route exact path="/finance" element={<Finance />} />
                <Route exact path="/majorcrops" element={<Majorcrops />} />
              </Routes>
            </div>
          </div>
        </div>

  );
}

export default App;
