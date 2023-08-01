import Footer from 'src/components/Footer'
import Navbar from 'src/components/navbar/Navbar'
import React, { ReactNode } from 'react'

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default HomeLayout
