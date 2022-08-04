import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getCakes } from '../apis/cakes'
import { addToCart } from '../actions/cart'

function SingleCake () {
  const { id } = useParams()

  const [cake, setCake] = useState(null)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    getCakes()
      .then(cakesArr => cakesArr.map(cake => {
        if (cake.id === Number(id)) { setCake(cake) }
      }))
      .catch(err => console.log(err))
  }, [])

  return (
    cake &&
    <div className='product'>
      <div className='product__Detail'>
        <div className='product__Image'>
          <img src={cake.image} alt={cake.name} />
        </div>

        <div className='product__Description'>
          <h4>{cake?.name}</h4>
          <div className='product__Text'>
              <p>{cake.description}</p>
              <p>{cake.caution}</p>
          </div>
            
          <div className='product__Flex'>
            <p>size: {cake.size} inches</p>
            <p>price: ${cake.price}</p>
          </div>
          <button
              onClick={() => {
                dispatch(addToCart(cake.id, cake.name, cake.image, cake.price))
                navigate('/cart')
              }}
            className='addToCart'
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default SingleCake
