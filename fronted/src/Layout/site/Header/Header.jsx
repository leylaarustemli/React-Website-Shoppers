import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
   <div className='header1'>
    <div className="container">
    <div className="left-header">
<i class="fa-solid fa-magnifying-glass"></i>
  <input type="text" placeholder='Search' />
</div>
<div className="center-header">
<p>SHOPPERS</p>
</div>
<div className="right-header">
<i class="fa-solid fa-user"></i>
<i class="fa-regular fa-heart"></i>
<Link to="/basket"><i class ="fa-solid fa-cart-shopping"></i></Link>
</div>

    </div>

    </div>
<hr />
    <div className="header2">
      <ul>
      <li><Link to="/">HOME</Link> <i class="fa-solid fa-chevron-down"></i></li>
        <li>ABOUT <i class="fa-solid fa-chevron-down"></i></li>
        <li>SHOP</li>
        <li>CATALOGUE</li>
        <li>NEW ARRIVALS</li>
        <li>CONTACT</li>
      </ul>
    </div>
    </>
 
  )
}

export default Header