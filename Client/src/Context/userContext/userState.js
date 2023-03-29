import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UserContext from './userContext';
export default function UserState(props) {
  const host = "http://localhost:5000"
  const navigate = useNavigate();
  const [mainUser, setMainUser] = useState({ fullname: "", phone: "", profilePicture: "" });
  
  const createUser = async (fullname, phone, password) => {
    const response = await fetch(`${host}/api/auth/register`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ fullname, phone, password })
    });
    const json = await response.json();
    if (json.success) {
      setMainUser(json.user);
      localStorage.setItem('userId', json._id);
      localStorage.setItem('token', json.authToken);
      navigate("/")
    }
    else {
      console.log(json.error);
    }
  }
  return (
    <UserContext.Provider value={{ mainUser, setMainUser, createUser }}>
      {props.children}
    </UserContext.Provider>
  )
}
