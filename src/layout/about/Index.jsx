import React from 'react'
import Appbar from '../../components/appBar/Index'
import AboutComponent from '../../components/about/Index'

const About = () => {
  return (
    <div className='flex flex-col'>
      <Appbar />
      <AboutComponent />
    </div>
  )
}

export default About