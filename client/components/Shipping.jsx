import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { placeOrder } from '../actions/orders'

function Shipping() {

  //check if user is logged in
  const token = useSelector((state) => state.loggedInUser.token)

  //submit order 
  const cart = useSelector((state) => state.cart)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submitOrder = (e) => {
    dispatch(placeOrder(cart))
    navigate('/order')
  }

  return (
    <>
    {token?
      <>
      <div className='shipping__Page}='>
        {/* <Product_checkout /> */}
        <div className='shipping'>
          <p className='steps'>
            Cart &gt; <b>Detail</b> &gt; Order
          </p>

          <form
            className='shipping__Form'
            // onSubmit={submitOrder}
            // action={'/order'}
          >
            <div>
              <label className='contact'>Contact</label>
              <input
                className='input'
                type="tel"
                placeholder="Phone Number"
              />
            </div>
            <div className='date'>
              <label>Pick Up Date</label>
              <input className='input' type="date" placeholder="Date" />
            </div>
            <div>
              <label>Pick Up Time</label>
              <input className='input' type="time" placeholder="time" />
            </div>
          </form>
          <h3>Shipping Method</h3>
          <div className='method'>
            <div>
              <input type="radio" id="shipping" name="shipping" />
              <label>Pick up in store</label>
            </div>
            <div>free</div>
          </div>
          <h3>Payment Method</h3>
          <div className='method'>
            <div>
              <input type="radio" id="payment" name="payment" />
              <label>Pay in store</label>
            </div>
            <div>Cash</div>
          </div>

          <button className='pay__Button' onClick={submitOrder}>
            Place Order
          </button>

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
        <Link to={"/"}>
          Go to sign in page
        </Link>
      </div>
    </div> 
}</>
)}

export default Shipping