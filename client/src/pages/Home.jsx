import React from 'react'
import Header from '../component/Header'
import Steps from '../component/Steps'
import BgSlider from '../component/BgSlider'
import Testimonials from '../component/Testimonials'
import Upload from '../component/Upload'

const Home = () => {
  return (
    <div>
      <Header/>
      <Steps/>
      <BgSlider/>
      <Testimonials/>
      <Upload/>
    </div>
  )
}

export default Home
