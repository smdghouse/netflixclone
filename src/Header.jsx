import React from 'react'
import logo from './Logonetflix.png'
import { Link } from 'react-router-dom'
import {FiSearch} from 'react-icons/fi'

function Header() {
  return (
   <nav className='header'>
    <img src={logo}alt="netflix log" />
    <div className="links">
      <Link to="/tvshows" >tv shows</Link>
      <Link to="movie" >movie</Link>
      <Link to="/recentlyadded" >recently added</Link>
      <Link to="/mylist" >my list</Link>
    </div>
    <FiSearch />
   </nav>
  )
}

export default Header