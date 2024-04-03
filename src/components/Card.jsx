import { Button } from '@mui/material'
import React from 'react'

const Card = ({title,content,buttonText}) => {
  return (
    <div className='w-[250px] card-body rounded-md  relative hover:bg-sky-900'>
        <div className='text-center font-bold text-slate-50 z-20'>
            {title}
        </div>
        <div className='text-sm text-white p-1 mt-4 text-center'>
            {content}
        </div>
        <div className='mx-auto flex justify-center border rounded-xl mt-4 hover:bg-black hover:border-black'>
        <Button sx={{color:'#ffffff'}} >{buttonText}</Button>
        </div>
    </div>
  )
}

export default Card