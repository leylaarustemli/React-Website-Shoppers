import React, { Fragment } from 'react'
import { Outlet } from 'react-router'
import Footer from '../../Layout/admin/Footer/Footer'
import Header from '../../Layout/admin/Header/Header'

const AdminRoot = () => {
  return (
    <Fragment>
      <Header/>
      <Outlet/>
      <Footer/>
    </Fragment>
  )
}

export default AdminRoot