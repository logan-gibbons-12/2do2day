import './Header.css';
import React, { useState } from 'react';
import DehazeRoundedIcon from '@mui/icons-material/DehazeRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';


const Header = () => {
  return (
    <div className='Header'>

        <div className='sidebar__Button'>
            <button className='Button'>
                <DehazeRoundedIcon />
            </button>
        </div>

        <div className="Logo">
            <img alt='logo' />
        </div>

        <div className='add__Button'>
            <button className='Button'>
                <AddBoxRoundedIcon />
            </button>
        </div>
        
    </div>
  )
}

export default Header