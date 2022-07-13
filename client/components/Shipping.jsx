import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { placeOrder } from '../actions/orders'
import { useAuth0 } from '@auth0/auth0-react'

import Product_checkout from './Product_checkout'

function Shipping() {

  const { loginWithRedirect } = useAuth0()

  function handleSignIn(e) {
    e.preventDefault()
    loginWithRedirect()
  }

  const dispatch = useDispatch()
  const navigate = useNavigate()

  //check if user is logged in
  const token = useSelector((state) => state.loggedInUser.token)

  //submit order 
  const cart = useSelector((state) => state.cart)

  const [totalPrice, setTotalPrice] = useState(cart.reduce(
    (accumulator, item) =>
      accumulator + item.quantity * item.price,
    0
  ))
  

  const [orderDetails, setOrderDetails] = 
  useState({
    phone: 0,
    date: '',
    time: '',
    shipping: '',
    payment: '',
    totalPrice: totalPrice
  })

 

  // console.log(orderDetails)

  const submitOrder = (e) => {
    e.preventDefault()
    dispatch(placeOrder(cart, orderDetails, token))
    navigate('/order')
  }

  return (
    <>
    {token?
      <>
      <div className='shipping__Page'>

        <Product_checkout />

        <div className='shipping'>
          <p className='steps'>
            Cart &gt; <b>Detail</b> &gt; Order
          </p>

          <form onSubmit={submitOrder}>

          <div  className='shipping__Form'>
            <div>
              <label className='contact'>Contact</label>
              <input
                className='input'
                type="tel"
                placeholder="Phone Number"
                onChange={e => setOrderDetails({...orderDetails, phone: e.target.value})}
              />
            </div>

            <div className='date'>
              <label>Pick Up Date</label>
              <input className='input' type="date" placeholder="Date" onChange={e => setOrderDetails({...orderDetails, date: e.target.value})}/>
            </div>

            <div>
              <label>Pick Up Time</label>
              <input className='input' type="time" placeholder="time" onChange={e => setOrderDetails({...orderDetails, time: e.target.value})}/>
            </div>
          </div>

          
          <h3>Shipping Method</h3>
          <div className='method'>
            <div>
              <input type="radio" id="shipping" name="shipping" value="Pick up in store" onChange={e => setOrderDetails({...orderDetails, shipping: e.target.value})}/>
              <label>Pick up in store</label>
            </div>
            <div>free</div>
          </div>

          <h3>Payment Method</h3>
          <div className='method'>
            <div>
              <input type="radio" id="payment" name="payment" value="Pay in store" onChange={e => setOrderDetails({...orderDetails, payment: e.target.value})}/>
              <label>Pay in store</label>
            </div>
            <div>Cash</div>
          </div>

          <input type="submit" value="Place Order" className='pay__Button' />
          </form>

          <p>
            <Link to={"/cart"}>
              Back to Cart
            </Link>
          </p>
        </div>
      </div>
      </> 
      :
      <div className='signin'>
        <p>Please sign in to make purchase.</p>
      <div className='signin__Link'>
        <a href="/" onClick={handleSignIn}>
          Go to sign in page
        </a> 
      </div>
    </div> 
}</>
)}

export default Shipping