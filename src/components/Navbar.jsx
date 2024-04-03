import React from 'react'

const Navbar = () => {
    return (
        <div className='container px-6 shadow-lg bg-sky-950 '>

            <div className='flex justify-between p-2'>
                {/* Left */}
                <div className='flex justify-center gap-4   items-center '>
                    <div className='invisible md:visible'>
                        <img src='src\assets\logo.png' className='w-14 h-14 rounded-full' />
                    </div>
                    <div>
                        <p className='text-slate-100'><span className='font-bold text-2xl'>BB</span>Travels</p>
                    </div>
                </div>
                {/* Right */}
                <div className= 'flex items-center'>
                    <div className='invisible md:visible flex justify-evenly gap-10 text-slate-50 font-bold '>
                        <a>Day Tours</a>
                        <a>Multi day Tours</a>
                        <a>Attractions</a>
                        <a>Themes</a>
                    </div>
                    <div>
                        <a><i className='md:invisible visible fa fa-bars  text-slate-50'></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar