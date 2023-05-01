import Layout from 'src/components/Layout'
import Hero from 'src/views/home/Hero'
import LatestWorks from 'src/views/home/LatestWorks'
import PersonalProject from 'src/views/home/PersonalProject'

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
