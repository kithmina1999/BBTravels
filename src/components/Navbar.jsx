import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className=' shadow-lg bg-sky-950'>

            <div className='flex justify-between '>
                {/* Left */}
                <Link to="/">
                    <div className='flex justify-center items-center '>

                        <div className='invisible md:visible p-2 ms-4' >
                            <img src='src\assets\logo.png' className='w-14 h-14 rounded-full' />
                        </div>

                        <div>
                            <p className='text-slate-100'><span className='font-bold text-2xl'>BB</span>Travels</p>
                        </div>

                    </div>
                </Link>
                {/* Right */}
                <div className='flex items-center'>
                    <div className='invisible md:visible flex justify-evenly gap-6 text-slate-50 font-bold '>
                        <Link to="/daytours">Day Tours</Link>
                        <a>Multi day Tours</a>
                        <a>Attractions</a>
                        <a>Themes</a>
                    </div>
                    <div className='ml-[-4]'>
                        <div>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <i className='md:invisible visible fa fa-bars  text-slate-50'></i>
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}

                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}>Day Tours</MenuItem>
                                <MenuItem onClick={handleClose}>Multi day Tours</MenuItem>
                                <MenuItem onClick={handleClose}>Attractions</MenuItem>
                                <MenuItem onClick={handleClose}>Themes</MenuItem>
                            </Menu>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar