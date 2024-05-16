
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import ROUTES from './Routes/routes'
import MainContext from './Context/Context'
import { useEffect, useState } from 'react'
import axios from 'axios'


function App() {
const router=createBrowserRouter(ROUTES)
const[data,setData]=useState([])
const[basket,setBasket]=useState([])
useEffect(()=>{
axios.get("http://localhost:8080/api/products").then(res=>(setData([...res.data])))
},[])
 function addToBasket(id){
  let basketItem=basket.find(item=>item._id==id)
  if(basketItem){
basketItem.count++
basketItem.totalPrice+=basketItem.price
setBasket([...basket])
  }
  else{
    let target=data.find(item=>item._id==id)
    let newItem={
      ...target,count:1,totalPrice:target.price
    }
    setBasket([...basket,newItem])
  }
 }
const contextData={
  addToBasket,data,setData,basket,setBasket
}
  return (
    <MainContext.Provider value={contextData}>
    <RouterProvider router={router}/>
    </MainContext.Provider>
  )
}

export default App
