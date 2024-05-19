
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import ROUTES from './Routes/routes'
import MainContext from './Context/Context'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { HelmetProvider } from 'react-helmet-async'


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
 function deleteBasket(id){
let target =basket.find((x)=>x._id==id)
if(target.count>1){
  target.count--
  target.totalPrice=target.price*target.count
  setBasket([...basket])
}
else{
  let indexOfTarget=basket.indexOf(target)
  basket.splice(indexOfTarget,1)
  setBasket([...basket])
}
 }
const contextData={
  addToBasket,data,setData,basket,setBasket,deleteBasket
}
  return (
    <MainContext.Provider value={contextData}>
   
   <HelmetProvider>
   <RouterProvider router={router}/>
   </HelmetProvider>
    </MainContext.Provider>
  )
}

export default App
