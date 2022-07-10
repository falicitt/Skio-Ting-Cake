import React, { useState } from 'react'

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { useAuth0 } from '@auth0/auth0-react'



function Profile() {

  const { logout } = useAuth0()

  function handleLogoff(e) {
    e.preventDefault()
    logout()
  }

  return (
    <>
      <a href="/" onClick={handleLogoff}>
        Log off
      </a>
    </>
  )
}

export default Profile