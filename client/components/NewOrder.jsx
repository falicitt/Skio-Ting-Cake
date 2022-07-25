import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function NewOrder() {

  const newOrder = useSelector((state) => state.newOrder)

  const token = useSelector((state) => state.loggedInUser.token)

  return (
    token &&
    <div className='order'>
     
      <p className='steps'>
        Cart &gt; Detail &gt; <b>Order</b>
      </p>
      <div className='check'>
        <img
          src="/circle-check-regular.svg"
          height={90}
          width={90}
          alt="circle-check"
        />
      </div>
      <h2>Order Confirmed</h2>
      
      {newOrder&&
      <div className="receipt">
        <p>Cake purchased:</p>
        {newOrder.cakePurchased.map((item) => 
        <li key={item.name}>
          <span>{item.name}</span>
          <span>{item.quantity}</span>
          <span>  ${item.price}</span>
        </li>)}
        <p>Subtotal: ${newOrder.totalPrice} each</p>
        <span>Contact number: </span>
        <span>{newOrder.phone}</span>
        <br></br>
        <span>Pick up at:</span>
        <span>{newOrder.date} {newOrder.time}</span>

        <div>{newOrder.shipping}</div>
        <div>{newOrder.payment}</div>
      </div>}

      <p className='text'>
        Thank you for supporting local business with Skio Ting Cake. Now that
        your order is confirmed it will be ready for collection on the scheduled
        pick up date. Please check your inbox in the future for order updates.
      </p>
      <Link to={'/'}>
        <button className='button__Back'>Back to shopping</button>
      </Link>
      <p>
        <a className='print'>Print receipt</a>
      </p>
      
    </div>
  )
}