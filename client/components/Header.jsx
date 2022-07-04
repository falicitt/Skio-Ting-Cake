import React, { useState } from 'react'
import { useContext } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header () {
//for shopping cart function
const cart = useSelector((state) => state.cart)

// const getItemsCount = () => {
//   return cart.reduce((accumulator, item) => accumulator + item.quantity, 0)
// }

//for toggle menu

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
        <Link to={"/"}>
          SKIO TING CAKE
        </Link>
      </li>
      <li>
        <Link to={"/"}>HOME</Link>
      </li>
      <li>
        <Link to={"/cakes"}>CAKES</Link>
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
        {/* <Link href="/cart"> */}
          <a>Cart 
            {/* ({getItemsCount()}) */}
            </a>
        {/* </Link> */}
      </div>
      <div className='auth'>
        {/* {session ? ( */}
          {/* // <Link href="/signin">
            <a>Profile</a>
          // </Link>
        ) : ( */}
          {/* <Link href="/api/auth/signin"> */}
            <a>Sign in</a>
          {/* </Link> */}
        )
      </div>
    </div>
    </>
)}

export default Header