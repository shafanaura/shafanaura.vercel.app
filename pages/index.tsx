import Layout from 'components/Layout'
import Space from 'components/Space'
import React from 'react'
import Hero from 'views/home/Hero'
import PersonalProject from 'views/home/PersonalProject'
import LatestWorks from 'views/home/LatestWorks'

const Home = () => {
  return (
    <Layout>
      <Hero />
      <LatestWorks />
      <PersonalProject />
    </Layout>
  )
}

export default Home
