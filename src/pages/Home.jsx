import React from 'react'
import Button from '../components/Button'
import OutlinedCard from '../components/Card'

const Home = () => {
  return (
    <div className='bg-cover lg:bg-hero-1 w-full bg-no-repeat bg-hero-2'>
        <div className='text-center lg:text-black p-5 pt-11 text-white'>
          <p className='text-3xl font-bold mt-12'>Embark on Unforgettable Journeys with Our<br /> Travel Agency</p>
          <div className='w-[50%] mx-auto lg:p-4 lg:visible invisible'>
            <p>Discover the world's wonders and create lifelong memories with our expertly crafted travel experiences. From breathtaking landscapes to vibrant cultures, 
              let us guide you on unforgettable adventures tailored to your dreams</p>
          </div>
          <Button classes='font-bold text-lg text-gray-800 rounded-lg shadow-md bg-slate-50 lg:w-[20%] w-[50%] mx-auto p-2 mt-8'>Start to Explore</Button>
        </div>
        <div className=' lg:gap-8 md:gap-4 gap-3 flex lg:flex-row mx-auto justify-center pt-10 pb-4 items-center flex-col'>
          <div>
            <OutlinedCard 
            title="Luxurious Accommodations"
            content="
            Handpicked accommodations from boutique to exclusive resorts offer luxury comfort."
            buttonText="Explore"
            textHover="text-white"
            cardBody="card-body-80"
            bgHover="bg-sky-900"
            contentColor="text-white"
            titleColor="text-white"
            buttonTextColor="text-white"
            hoverTextColor="white"
            buttonTextHover="text-white"
            />
            
          </div>
          <div>
            <OutlinedCard 
            title="Luxurious Accommodations"
            content="
            Handpicked accommodations from boutique to exclusive resorts offer luxury comfort."
            buttonText="Explore"
            textHover="text-white"
            cardBody="card-body-80"
            bgHover="bg-sky-800"
            contentColor="text-white"
            titleColor="text-white"
            buttonTextColor="text-white"
            hoverTextColor="white"
            buttonTextHover="text-white"
            />
            
          </div>
          <div>
            <OutlinedCard 
            title="Luxurious Accommodations"
            content="
            Handpicked accommodations from boutique to exclusive resorts offer luxury comfort."
            buttonText="Explore"
            textHover="text-white"
            cardBody="card-body-80"
            bgHover="bg-sky-950"
            contentColor="text-white"
            titleColor="text-white"
            buttonTextColor="text-white"
            hoverTextColor="white"
            buttonTextHover="text-white"
            />
          </div>
        </div>
      </div>
  )
}

export default Home