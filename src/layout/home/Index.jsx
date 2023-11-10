import React from 'react'
import Add from '../../components/add/Index'
import Appbar from '../../components/appBar/Index'
const Home = () => {
  return (
    <div className='flex flex-col'>
            <Appbar />
      <Add />
    </div>
  )
}

export default Home