import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getCakes } from '../apis/cakes'
import { addToCart } from '../actions/cart'

function SingleCake () {
  const { id } = useParams()

  const [cake, setCake] = useState(null)

  const dispatch = useDispatch()

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
          {/* <p className='product__Text'>
            {cake.description}
          </p> */}
          <div className='product__Flex'>
            <p>size: {cake.size} inches</p>
            <p>price: ${cake.price}</p>
          </div>
          <button
            onClick={() => dispatch(addToCart(cake.id, cake.name, cake.image, cake.price))}
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
