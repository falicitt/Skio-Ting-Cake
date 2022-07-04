import React from 'react'
import { Link } from 'react-router-dom'

function Footer () {
  return (
    <footer>
      <ul className='Footer'>
        <li>
          <Link to={'/Q&A'}>Q&A &gt; </Link>
        </li>
        <li>
          <Link to={'/contact'}>CONTACT &gt; </Link>
        </li>
        <li>
          <Link to={'/about'}>ABOUT &gt; </Link>
        </li>
      </ul>

      <ul className='CopyRight'>
        <li>© 2022 Skio Ting Cake. All Rights Reserved.</li>
        <li>Made with 🤍 by Cassie Wang</li>
      </ul>
    </footer>
  )
}

export default Footer
