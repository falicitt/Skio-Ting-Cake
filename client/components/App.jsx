import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'

// import { fetchCakes } from '../actions'
import { Routes, Route } from 'react-router-dom'

import Header from './Header'
import Cakes from './Cakes'
import Home from './Home'
import Footer from './Footer'
import SingleCake from './SingleCake'
import Cart from './Cart'

function App () {
  // const cakes = useSelector(state => state.cakes)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetchCakes())
  // }, [])

  return (
    <>
      <div className='app'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cakes' element={<Cakes />} />
          <Route path='/cakes/:id' element={<SingleCake />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
