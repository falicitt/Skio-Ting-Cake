import React, { useState, useEffect } from "react"
import { useAuth0 } from '@auth0/auth0-react'
import { useSelector } from 'react-redux'
import { getOrdersByUser } from '../apis/orders'
import { Link } from 'react-router-dom'



function Profile() {

  const { logout } = useAuth0()

  function handleLogoff(e) {
    e.preventDefault()
    logout()
  }


  const email = useSelector(state => state.loggedInUser.email)
  const auth0Id = useSelector(state => state.loggedInUser?.auth0Id)
  
  const [ orders, setOrders ] = useState([])

  useEffect(() => {
    getOrdersByUser(auth0Id)
      .then((ordersArry) => {
        setOrders(ordersArry)
      })
  }, [auth0Id])

  const tf = new Intl.DateTimeFormat('en-NZ')

  return (
    <>
      

      <div className="profile">
      <h1 className="profileTitle">My Orders</h1>
  
        <div className="email">You are logged in as: {email}</div>
        <a href="/" onClick={handleLogoff}>
        Log off
      </a>
      <ul className="mycards">
      {orders?.map(order => 
      
        <li key={order.id} className='order'>
          {/* <Link to={`/orders/`}> */}
          <p>order number: 056{order.id} </p>
          <p>total amount: ${order.amount}</p>
          <p>{tf.format(new Date(order.created_at))}</p>
          <p>order status: {order.status}</p>
          {/* </Link> */}
        </li>
       
        )}
      </ul>
    </div>

    </>
  )
}

export default Profile