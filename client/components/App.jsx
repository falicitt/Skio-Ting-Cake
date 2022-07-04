import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'

// import { fetchCakes } from '../actions'
import { Routes, Route } from 'react-router-dom'

import Cakes from './Cakes'

function App () {
  // const cakes = useSelector(state => state.cakes)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetchCakes())
  // }, [])

  return (
    <>
      <div className='app'>
        <h1>Skio Ting Cake</h1>
        {/* <ul>
          {cakes.map(cake => (
            <li key={cake.id}>{cake.name}</li>
          ))}
        </ul> */}
        <Routes>
          <Route path='/cakes' element={<Cakes />} />
        </Routes>
      </div>
    </>
  )
}

export default App
