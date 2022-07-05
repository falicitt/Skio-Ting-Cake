import { useSelector, useDispatch } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteFromCart, incrementQuantity, decrementQuantity } from '../actions/cart'

function Cart () {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) =>
        accumulator + item.quantity * item.data.attributes.price,
      0
    )
  }

  return (
    <div className='container'>
      {cart.length === 0 ? (
        <h1 className='empty'>Your Cart is Empty!</h1>
      ) : (
        <>
          <div className='cart__Title'>
            <h1>Your Cart Items</h1>
            <Link to={"/cakes"}>
              <a>back to shopping</a>
            </Link>
          </div>
          <div className='header'>
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Total</div>
            <div>Remove</div>
          </div>
          <div>
            {cart.map((item) => (
              <div
                key={item.name}
                className='item__Info'>
                <div className='image'>
                <img src={item.image} alt={item.name} />
                  {item.name}
                </div>

                <div>$ {item.price}</div>
                <div className='buttons'>
                  <button onClick={() => dispatch(incrementQuantity(item.id))}>
                    +
                  </button>

                  <p>{item.quantity}</p>

                  <button onClick={() => dispatch(decrementQuantity(item.id))}>
                    -
                  </button>
                </div>

                <div>$ {item.quantity * item.data.attributes.price}</div>
                <div>
                  <button
                    className='button'
                    onClick={() => dispatch(deleteFromCart(item.id))}
                  >
                    x
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className='checkout__Session'>
            <p>Total Price: $ {getTotalPrice()}</p>
            <Link href="/shipping" passHref>
              <button className='checkout__Button'>Check-Out</button>
            </Link>
          </div>
        </>
      )}
    </div>
  )

}

export default Cart