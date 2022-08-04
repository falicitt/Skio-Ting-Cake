import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getCakes } from '../apis/cakes'

function Cakes () {
  //get cakes from database
  const [cakes, setCakes] = useState(null)
  const [cakesCopy, setCakesCopy] = useState(cakes)

  useEffect(() => {
    getCakes()
      .then(cakesArr => {
        setCakes(cakesArr)
        setCakesCopy(cakesArr)
      })
      .catch(err => console.log(err))
  }, [])

  console.log('cakes', cakes)

  //sort cakes

  
  const [sort, setSort] = useState('')

  if (sort === 'namePlus') {
    cakesCopy.sort(function(a, b) {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    }); 
  } else if (sort === 'nameMinus') {
    cakesCopy.sort(function(a, b) {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
      // names must be equal
      return 0;
    });
  }

  //search for cakes
  const [searchItem, setSearchItem] = useState('')

  const handleChange = (evt) => {setSearchItem(evt.target.value)}

  const [searchResult, setSearchResult] = useState(null)
  
  const handleSearch = (e) => {
    e.preventDefault()
    const result = cakesCopy.filter(post => post['name'].toLowerCase().includes(searchItem))
    setSearchResult(result)
    // console.log('searchResult', searchResult)
    
  }

  const clearSearch = () => {
    setSearchResult(null)
  }



  return (
    <>
      <h2 className='all__Cakes'>ALL CAKES</h2>
      <div className='productPage'>
        <div>
          <button onClick={() => setSort('namePlus')}>Sort from A to Z</button>
          <button onClick={() => setSort('nameMinus')}>Sort from Z to A</button>
        </div>
        <form onSubmit={handleSearch}>
          <label htmlFor='search'>Search for a cake:</label>
          <input id='search' name='search' type='text' 
                onChange={handleChange} />
            <button>Search</button>
            {searchResult? <button onClick={clearSearch}>Clear Search</button> : ''}
          
        </form>
      </div>

      <ul className='product__Container'>
        {searchResult?
          searchResult.map(cake =>
            <li key={cake.id} className='product'>
              <Link to={`/cakes/${cake.id}`}>
              <div className='product__ColImg'>
                <img src={cake.image} />
              </div>
              <p className='product__Col'>{cake.name}</p>
              </Link>
            </li>) :
        cakes?.map(cake =>
          <li key={cake.id} className='product'>
            <Link to={`/cakes/${cake.id}`}>
              <div className='product__ColImg'>
                <img src={cake.image} />
              </div>
              <p className='product__Col'>{cake.name}</p>
              </Link>
            </li>)}
      </ul>
    </>
  )
}

export default Cakes
