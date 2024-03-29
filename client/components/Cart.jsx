import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { deleteFromCart, incrementQuantity, decrementQuantity } from '../actions/cart'



function Cart () {
  const cart = useSelector((state) => state.cart)
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const getTotalPrice = () => {
    return cart.reduce((accumulator, item) =>
      accumulator + item.quantity * item.price, 0
    )
  }

  function submitCart() {
    navigate('/shipping')
  }

  return (
    <div className='container'>
      {cart.length === 0 ? (
        <h1 className='empty'>Your Cart is Empty! Start shopping <Link to="/cakes">here</Link></h1>
      ) : (
        <>
          <div className='cart__Title'>
            <h1>Your Cart Items</h1>
            <Link to={'/cakes'}>back to shopping</Link>
          </div>
          <div className='header'>
            <div>Product</div>
            <div className='desktop'>Price</div>
            <div>Quantity</div>
            <div className='desktop'>Total</div>
          </div>
          <div>
            {cart.map((item) => (
              <div
                key={item.name}
                className='item__Info'>
                <div className='image'>
                  <img src={item.image} alt={item.name} />              
                  <div className='name_container'>
                    <div className='item_name'>{item.name}</div>
                    <button
                      className='delete'
                      onClick={() => dispatch(deleteFromCart(item.id))}
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <div className='desktop'>$ {item.price}</div>

                <div className='buttons'>
                  <button onClick={() => dispatch(incrementQuantity(item.id))}>
                    +
                  </button>

                  <p>{item.quantity}</p>

                  <button onClick={() => dispatch(decrementQuantity(item.id))}>
                    -
                  </button>
                </div>

                <div className='desktop'>$ {item.quantity * item.price}</div>
              </div>
            ))}
          </div>
          <div className='checkout__Session'>
            <p className='total_Price'>Total Price: $ {cart && getTotalPrice()}</p>
            {/* <Link href="/shipping" passHref> */}
            <button className='checkout__Button' onClick={submitCart}>Check-Out</button>
            {/* </Link> */}
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
