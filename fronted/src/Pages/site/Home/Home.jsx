import React from 'react'
import Section1 from '../../../Components/Section1'
import CardSection from '../../../Components/CardSection'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <div>
       <Helmet>
    <title>home</title>
    </Helmet>
      <Section1/>
      <CardSection/>
    </div>
  )
}

export default Home