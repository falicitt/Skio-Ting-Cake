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
import Profile from './Profile'
import NewOrder from './NewOrder'

import { cacheUser } from '../auth0-utils'
import { useAuth0 } from '@auth0/auth0-react'

function App () {
  cacheUser(useAuth0)

  return (
    <>
      <div className='app'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cakes' element={<Cakes />} />
          <Route path='/cakes/:id' element={<SingleCake />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/order' element={<NewOrder />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
