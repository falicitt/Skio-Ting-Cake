import React from 'react'
import { useSelector } from 'react-redux'

function Product_checkout() {
  const cart = useSelector((state) => state.cart)

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) =>
        accumulator + item.quantity * item.price,
      0
    )
  }

  return (
    <div className='checkout_product'>
      {cart.map((item) => (
        <div key={item.name} className='product__Info'>
          <div className='image'>
            <img
              src={item.image}
            />
          </div>
          <div>
            <div>{item.name}</div>
            <div>
              $ {item.price} * {item.quantity}
            </div>
          </div>
        </div>
      ))}

      <div className='subtotal'>
        <div>Subtotal:</div>
        <div>$ {getTotalPrice()}</div>
        <p>Shipping: free</p>
      </div>
      <div>Total: $ {getTotalPrice()}</div>
    </div>
  )
}

export default Product_checkout