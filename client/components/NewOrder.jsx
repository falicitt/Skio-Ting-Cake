import React from 'react'
import { Link } from 'react-router-dom'

export default function NewOrder() {

  return (
    <div className='order'>
      <p className='steps'>
        Cart &gt; Detail &gt; <b>Order</b>
      </p>
      <div className='check'>
        {/* <Image
          src="/circle-check-regular.svg"
          height={90}
          width={90}
          alt="circle-check"
        /> */}
      </div>
      <h2>Order Confirmed</h2>
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