import React, { useContext } from 'react'
import "./Add.css"
import { Formik } from 'formik';
import axios from 'axios';
import MainContext from '../../../Context/Context';
const{data,setData}=useContext(MainContext)
const Add = () => {
  return (
    <div>
 <Formik
       initialValues={{ title: '', image: '',price:'',description:'' }}
       validate={values => {
       
     
       }}
       onSubmit={(values, { setSubmitting }) => {
        axios.post("http://localhost:8080/api/products",{
          
            title:values.title,
            image:values.image,
            price:values.price,
            description:values.description,
           

        }).then(res=>{
            data([...data,res.data])
        })
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <input
             type="text"
             name="title"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.title}
           />
           {errors.title && touched.title && errors.title}
           <input
             type="text"
             name="image"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.image}
           />
           {errors.image && touched.image && errors.image}
           <input
             type="number"
             name="price"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.price}
           />
           {errors.price && touched.price && errors.price}
           <input
             type="text"
             name="description"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.description}
           />
           {errors.description && touched.description && errors.description}
           
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
    </div>
  )
}

export default Add