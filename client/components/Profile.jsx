import React, { useState, useEffect } from "react"
import { useAuth0 } from '@auth0/auth0-react'
import { useSelector } from 'react-redux'
import { getOrdersByUser } from '../apis/orders'

function Profile() {

  const { loginWithRedirect, logout } = useAuth0()

  function handleLogoff(e) {
    e.preventDefault()
    logout()
  }

  function handleSignIn(e) {
    e.preventDefault()
    loginWithRedirect()
  }

  const email = useSelector(state => state.loggedInUser.email)
  const auth0Id = useSelector(state => state.loggedInUser?.auth0Id)
  
  const [ orders, setOrders ] = useState(null)

  useEffect(() => {
    getOrdersByUser(auth0Id)
      .then((ordersArry) => {
        setOrders(ordersArry)
      })
  }, [auth0Id])
  console.log('orders', orders)

  const tf = new Intl.DateTimeFormat('en-NZ')

  return (
    <>
      {email?

        <div className="profile">
          
          <h1>My Orders</h1>
          <div className="email">You are logged in as: {email}</div> 
          <ul className="mycards">
            {orders?.map(order =>
      
              <li key={order.id} className='order'>
                {/* <Link to={`/orders/`}> */}
                <p>Order number: 056{order.id} </p>
                <p>Total amount: ${order.amount}</p>
                <p>Order time: {tf.format(new Date(order.created_at))}</p>
                <p>Order status: {order.status}</p>
                {/* </Link> */}
              </li>
       
            )}
          </ul>
          <button className='checkout__Button' onClick={handleLogoff}>Log off</button>
        </div> :
        <div className='signin'>
        <p>Please sign in to view your profile.</p>
      <div className='signin__Link'>
        <a href="/" onClick={handleSignIn}>
          Go to sign in page
        </a> 
      </div>
    </div> 
      }
    </>
  )
}

export default Profile