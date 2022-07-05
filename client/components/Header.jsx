import React, { useState } from 'react'

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function Header () {

//for authentication
const { logout, loginWithRedirect } = useAuth0()

function handleLogoff(e) {
  e.preventDefault()
  logout()
}

function handleRegister(e) {
  e.preventDefault()
  loginWithRedirect({
    redirectUri:`${window.location.origin}/register` 
  })
}

function handleSignIn(e) {
  e.preventDefault()
  loginWithRedirect()
}

// for shopping cart function
  const cart = useSelector((state) => state.cart)

  // console.log('cart', cart)

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0)
  }

  // for toggle menu

  const [isActive, setActive] = useState('false')

  const ToggleClass = () => {
    setActive(!isActive)
  }

  return (
    <>
      <div className='Nav'>

        {/* desktop navbar */}
        <ul className='Nav__Desktop'>
          <li className='Title'>
            <Link to={'/'}>
              SKIO TING CAKE
            </Link>
          </li>
          <li>
            <Link to={'/'}>HOME</Link>
          </li>
          <li>
            <Link to={'/cakes'}>CAKES</Link>
          </li>
          {/* <li>
            <Link to={"/about"}>ABOUT</Link>
          </li>
          <li>
            <Link to={"/contact"}>CONTACT</Link>
          </li> */}
        </ul>

        {/* shopping cart */}
        <div className='cart'>
          <Link to={'/cart'}>
            Cart({getItemsCount()})
          </Link>
        </div>
        <div className='auth'>
          {/* {session ? ( */}
          {/* // <Link href="/signin">
              <a>Profile</a>
            // </Link>
          ) : ( */}
          {/* <Link href="/api/auth/signin"> */}
          {/* <a>Sign in</a> */}
          {/* </Link> ) */}
          <IfAuthenticated>
            {/* <Link to={"/profile"}> */}
              {/* Profile */}
            {/* </Link> */}
            <a href="/" onClick={handleLogoff}>
              Log off
            </a>
          </IfAuthenticated>
          <IfNotAuthenticated>
            {/* <a href="/" onClick={handleRegister}>
              Register
            </a> */}
            <a href="/" onClick={handleSignIn}>
              Sign in
            </a>
        </IfNotAuthenticated>
        </div>
      </div>
    </>
  )
}

export default Header
