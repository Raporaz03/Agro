import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UserContext from './userContext';
export default function UserState(props) {
  const host = "http://localhost:5000"
  const navigate = useNavigate();
  const [mainUser, setMainUser] = useState({ fullname: "", phone: "", profilePicture: "" });
  const userId = localStorage.getItem('userId');
  console.log(userId)
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

  const loginUser = async (phone, password) => {
    const response = await fetch(`${host}/api/auth/login`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ phone, password })
    })
    const json = await response.json();
    if (json.success) {
        setMainUser(json.user);
        localStorage.setItem('token', json.authToken);
        localStorage.setItem('userId', json.user._id);
        navigate("/");
    }
    else {
        console.log(json.error);
    }
}

  const getMainUser = async () => {
    const response = await fetch(`${host}/api/users/${userId}`, {
        method: "GET",
        headers: { "Content-type": "application/json" },
    })
    const json = await response.json();
    console.log(json)
    setMainUser(json);
}

  return (
    <UserContext.Provider value={{ mainUser, setMainUser, createUser, getMainUser, loginUser }}>
      {props.children}
    </UserContext.Provider>
  )
}
