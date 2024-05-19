import React, { useEffect, useState } from 'react'
import "./Detail.css"
import { useParams } from 'react-router'
import axios from 'axios'
import {Helmet} from "react-helmet-async";
const Detail = () => {
    const[data,setData]=useState({})
    const{id}=useParams()
    useEffect(()=>{
        axios.get(`http://localhost:8080/api/products/${id}`).then(res=>{
            setData(res.data)
        })
    },[id])
  return (
    <div className='details'>
    <Helmet>
    <title>detail</title>
    </Helmet>
    <div className="container">
      <div className="left-detail">
        <img src={data.image} alt="" />
      </div>
      <div className="right-detail">
        <h2>{data.title}</h2>
        <h4>{data.price}</h4>
        <p>{data.description}</p>
      </div>
    </div>
        </div>
  )
}

export default Detail