import HomeLayout from 'src/components/layout/HomeLayout'
import Hero from 'src/views/home/Hero'
import LatestWorks from 'src/views/home/LatestWorks'
import PersonalProject from 'src/views/home/PersonalProject'

const Home = () => {
  return (
    <HomeLayout>
      <Hero />
      <LatestWorks />
      <PersonalProject />
    </HomeLayout>
  )
}

export default Home
