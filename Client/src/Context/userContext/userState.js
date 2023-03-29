import React, { useState } from 'react'
import UserContext from './userContext';
export default function UserState(props) {
  const [mainUser, setMainUser] = useState({name: "", profilePicture: ""});
  return (
    <UserContext.Provider value={{mainUser, setMainUser}}>
      {props.children}
    </UserContext.Provider>
  )
}
