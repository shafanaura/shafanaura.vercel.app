import Layout from 'components/Layout'
import Hero from 'views/home/Hero'
import LatestWorks from 'views/home/LatestWorks'
import PersonalProject from 'views/home/PersonalProject'

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
