import React, { useEffect, useState } from 'react'
import "./CardSection.css"
import { useContext } from 'react'
import MainContext from '../Context/Context'
import { Link } from 'react-router-dom'
import axios from 'axios'
const CardSection = () => {
const {data,addToBasket}=useContext(MainContext)
const[inpVal,setInpVal]=useState("")
// useEffect(()=>{
//   axios.get("http://localhost:8080/api/products").then((res)=>{
//     if(inpVal!==""){
//       setData([
//         ...res.data.filter((item)=>{
//           item.title.toLowerCase().includes(inpVal.trim().toLowerCase())
//         })
//       ])
//     }
//     else{
//       setData([...res.data])
//     }
//   })
// },[inpVal])

  return (
    <div className='cardsection'>

   
    <div className="container">
    <input value={inpVal} onChange={(e)=>setInpVal(e.target.value)} type="text" placeholder='Search' />
    <h4>Featured Products</h4>
<div className="cardss">
   {data.filter(x=>x.title.toLowerCase().includes(inpVal.toLowerCase())).map((item,index)=>(<div className="cardd">
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
             <Link to={`detail/${item._id}`} id='detail'>Details</Link>
            </div>
          
        </div>
    </div>))}
   
    
    
    
</div>
    </div>

    </div>
  )
}

export default CardSection