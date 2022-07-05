import React, { useEffect, useState } from 'react'
import { useParams , Link } from "react-router-dom";
// import { useDispatch, useSelector } from 'react-redux'
import { getCakes } from '../apis/cakes'

function SingleCake () {
  const { id } = useParams()

  const [cake, setCake] = useState(null)

  console.log(id)

  useEffect(() => {
    getCakes()
      .then(cakesArr => cakesArr.map(cake => {
        if(cake.id === Number(id)) {
        setCake(cake)
        console.log('cake', cake)}
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
              // onClick={() => dispatch(addToCart(product))}
              // className={styles.addToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>

  )


}

export default SingleCake