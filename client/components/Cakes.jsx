import React, { useEffect, useState } from 'react'
import { getCakes } from '../apis/cakes'

function Cakes() {

  const [cakes, setCakes] = useState(null)

  useEffect(() => {
    getCakes()
    .then(cakesArr => {
      
      setCakes(cakesArr)
      console.log('cakes', cakesArr)})
  }, [])

  return (
    <ul>
      {cakes?.map(cake => 
        <li key={cake.id}>
          <img src={cake.image} />
          <p>{cake.name}</p>
        </li>)}
    </ul>
  )
}

export default Cakes