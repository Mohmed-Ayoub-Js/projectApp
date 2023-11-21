import React from 'react'
import Appbar from '../../components/appBar/Index'
import Adkar from '../../components/Adkar/Index';
import Add from '../../components/add/Index';
const Home = () => {
  return (
    <div className='flex flex-col'>
      <Appbar />
      <Add />
    </div>
  )
}

export default Home