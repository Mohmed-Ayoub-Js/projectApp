import React from 'react'
import Data from '../../../data.json';
import { Card , CardBody } from '@nextui-org/react';
import Back from '../../global/Back';
import Appbar from '../../components/appBar/Index';
const Monring = () => {
  return (
    <div>
        <Appbar />
 <Back />
      <ul className='flex  flex-col m-5 p-5'>
        {Data["أذكار الصباح"].map((adkar, index) => (
          <li key={index}>
                <Card >
                <CardBody>
                  <div >
                <div className="w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]">
  <h3 className="text-gray-900 pb-2 text-xl font-bold sm:text-2xl">{adkar.category}</h3>
  <span className="bg-blue-500 mx-auto mb-6 inline-block h-1 w-[90px] rounded"></span>
  <p className="text-gray-500 mb-10 text-base leading-relaxed">{adkar.content}</p>
  <p className="text-blue-500 mb-10 text-base leading-relaxed font-bold text-2xl">التكرار : {adkar.count}</p>

  <div className="flex flex-wrap gap-4">


  </div>
</div>                    
                  </div>

                </CardBody>                   
                </Card>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Monring