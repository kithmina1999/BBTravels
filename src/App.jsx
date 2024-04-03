
import './App.css'
import Button from './components/Button'
import OutlinedCard from './components/Card'
import Navbar from './components/Navbar';

function App() {

  return (
    <div className='mx-auto max-w-100 h-[100vh]'>
      <Navbar />
      <div className='bg-cover bg-hero-1 w-full bg-no-repeat'>
        <div className='text-center text-white p-5 pt-11'>
          <p className='text-3xl font-bold mt-12'>Embark on Unforgettable Journeys with Our<br /> Travel Agency</p>
          <div className='w-[50%] mx-auto p-4'>
            <p>Discover the world's wonders and create lifelong memories with our expertly crafted travel experiences. From breathtaking landscapes to vibrant cultures, 
              let us guide you on unforgettable adventures tailored to your dreams</p>
          </div>
          <Button classes='font-bold text-lg text-gray-800 rounded-lg shadow-md bg-slate-50 w-[20%] mx-auto p-2 mt-8'>Start to Explore</Button>
        </div>
        <div className='flex gap-8 justify-center pt-10 pb-4'>
          <div>
            <OutlinedCard 
            title="Luxurious Accommodations"
            content="
            Handpicked accommodations from boutique to exclusive resorts offer luxury comfort."
            buttonText="Explore"
            />
            
          </div>
          <div>
            <OutlinedCard 
            title="Luxurious Accommodations"
            content="
            Handpicked accommodations from boutique to exclusive resorts offer luxury comfort."
            buttonText="Explore"/>
          </div>
          <div>
            <OutlinedCard 
            title="Luxurious Accommodations"
            content="
            Handpicked accommodations from boutique to exclusive resorts offer luxury comfort."
            buttonText="Explore"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
