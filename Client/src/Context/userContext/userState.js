import React, { useState } from 'react'

export default function userState() {
    
  return (
    <UserContext.Provider value="">
      {props.children}
    </UserContext.Provider>
  )
}
