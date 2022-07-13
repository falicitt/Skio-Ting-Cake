import React, { useEffect, useState } from 'react'
import { getCakes } from '../apis/cakes'
import { Link } from 'react-router-dom'

import About from './About'

function Home () {
  const [cakes, setCakes] = useState(null)

  useEffect(() => {
    getCakes()
      .then(cakesArr => setCakes(cakesArr))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <div className='Hero'>
        <div className='hero__Text'>
          <h1 className='hero__H1'>Skio Ting Cake</h1>
          <p className='hero__P'>let&apos;s celebrate every occasion</p>
          <Link to={'/cakes'}>
            <p className='check'>check it out &gt;</p>
          </Link>
        </div>
      </div>

      <h2>Most Popular Cakes</h2>
      <ul className='product__Container'>
        {cakes?.map(cake => {
          if (cake.featured === 'true') {
            return (
              
              <li key={cake.id} className='product'>
                <Link to={`/cakes/${cake.id}`}>
                <div className='product__ColImg'>
                  <img src={cake.image} alt={cake.name} />
                </div>
                <p className='product__Col'>{cake.name}</p>
                </Link>
              </li>
              )
          }
        })}
      </ul>

      <About />
    </>
  )
}

export default Home
