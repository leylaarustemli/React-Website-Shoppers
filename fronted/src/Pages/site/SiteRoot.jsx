import React, { Fragment } from 'react'
import { Outlet } from 'react-router'
import Footer from '../../Layout/site/Footer/Footer'
import Header from '../../Layout/site/Header/Header'
const SiteRoots = () => {
  return (
    <Fragment>
      <Header/>
      <Outlet/>
      <Footer/>
    </Fragment>
  )
}

export default SiteRoots