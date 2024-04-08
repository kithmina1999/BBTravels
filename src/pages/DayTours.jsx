import React from 'react'
import OutLinedCard from '../components/Card'
import ImageCard from '../components/ImageCard'

const DayTours = () => {
  return (
    <div className='z-10 relative '>
      <section className='flex bg-slate-100'>
        <img src='src\assets\day-tour-2.jpg' className='day-tour-hero lg:block hidden' />
        <div>
          <div className=' py-10 z-10 relative'>
            <p className='text-center font-semibold text-3xl'><span className='font-bold '>Explore</span> Our Day Tours</p>
          </div>
          <div>
            <p className='px-6 text-center'>
              Embark on unforgettable adventures with our curated selection of day tours.
              Whether you're a thrill-seeker, a nature enthusiast, a history buff,
              or someone who simply loves to immerse themselves in new experiences, we have something for everyone.
              Our day tours are designed to showcase the best of each destination,
              offering you a glimpse into its culture, heritage, and natural beauty.
            </p>
          </div>
          <div className='flex lg:flex-row flex-col items-center justify-center gap-5 mt-24 mx-auto p-10 lg:p-2'>
            <OutLinedCard
              title="Expert Guides"
              content=" Our experienced guides are passionate about the destinations they operate in. They'll not only show you the highlights but also share fascinating insights and stories along the way."
              buttonText="Meet Our Guides"
              textHover="text-white"
              cardBody="card-body-outlined"
              bgHover="bg-slate-50"
              contentColor="text-dark"
              titleColor="text-dark"
              buttonTextColor="black"
              hoverTextColor="white"
              buttonTextHover="text-white"
            />
            <OutLinedCard
              title="Small Group Sizes"
              content="We believe in providing personalized experiences, which is why our day tours are limited to small group sizes. This allows for a more intimate and immersive journey."
              buttonText="Join a Small Group"
              textHover="text-white"
              cardBody="card-body-outlined"
              bgHover="bg-slate-50"
              contentColor="text-dark"
              titleColor="text-dark"
              buttonTextColor="black"
              hoverTextColor="white"
              buttonTextHover="text-white"
            />
            <OutLinedCard
              title="Handpicked Experiences"
              content="We carefully handpick each experience to ensure that you get the most out of your day tour. From iconic landmarks to hidden gems, we strive to offer a well-rounded itinerary."
              buttonText="Discover Experiences"
              textHover="text-white"
              cardBody="card-body-outlined"
              bgHover="bg-slate-50"
              contentColor="text-dark"
              titleColor="text-dark"
              buttonTextColor="black"
              hoverTextColor="white"
              buttonTextHover="text-white"
              buttonLink='#destinations'
            />
          </div>
        </div>
      </section>
      <section className='pt-10 bg-slate-50 ' id='destinations'>
        <div className='mt-10'>
          <p className='text-center text-4xl font-semibold'>Our Day Tour Destinations</p>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-10 p-3">
          <div className="">
            <ImageCard 
             imageURL='src\assets\grid-photo-1.jpg'
            />
          </div>
          <div className="...">
          <ImageCard imageURL='src\assets\grid-photo-2.jpg'/>
          </div>
          <div className="...">
          <ImageCard imageURL='src\assets\grid-photo-3.jpg'/>
          
          </div>
          <div className="col-span-2 ...">
            <ImageCard imageURL='src\assets\grid-photo-6.jpg'/>
            </div>
          <div className="...">
            <ImageCard imageURL='src\assets\grid-photo-5.jpg'/>
            <div className="w-full h-36 mt-5 border m-2 bg-slate-300">
              ads
            </div>
          </div>
          <div className="...">
            <ImageCard imageURL='src\assets\grid-photo-4.jpg'/>
            <div className="w-full h-80 mt-5 border m-2 bg-slate-300">
              ads
            </div>
          </div>
          <div className="col-span-2 ...">
            <ImageCard imageURL='src\assets\grid-photo-1.jpg'/>
          </div>
        </div>
      </section>
      <section className='pt-10 bg-slate-800' id='guides'>
          <div>
            <p className='text-3xl text-white text-center p-4 font-bold'>Meet Our Expert Guides</p>
          </div>
          <div className='mt-16 p-4'>
              <div className='flex gap-4'>
              
              </div>
          </div>
      </section>
    </div>
  )
}

export default DayTours