import React, { useEffect, useState } from 'react'
import "./CardSection.css"
import axios from "axios"
import { useContext } from 'react'
import MainContext from '../Context/Context'
const CardSection = () => {
const {data,addToBasket}=useContext(MainContext)
  return (
    <div className='cardsection'>
    <div className="container">
    <h4>Featured Products</h4>
<div className="cardss">
   {data.map((item,index)=>(<div className="cardd">
        <div className="card-body">
            <img src={item.image} alt="" />
        </div>
        <div className="card-footer">
            <p>{item.title}</p>
            <span>Lorem, ipsum dolor.</span>
            <div className="baskett">
            <p >{item.price}AZN</p>
            <button onClick={()=>{
addToBasket(item._id)
            }}>Add to basket</button>
            </div>
          
        </div>
    </div>))}
   
    
    
    
</div>
    </div>

    </div>
  )
}

export default CardSection