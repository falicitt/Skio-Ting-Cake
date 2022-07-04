import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'

// import { fetchCakes } from '../actions'
import { Routes, Route } from 'react-router-dom'

import Header from './Header'
import Cakes from './Cakes'
import PopularCakes from './PopularCakes'
import Footer from './Footer'

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
          <Route path='/' element={<PopularCakes />} />
          <Route path='/cakes' element={<Cakes />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
