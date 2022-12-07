import './Header.css';
import React, { useState } from 'react';
import DehazeRoundedIcon from '@mui/icons-material/DehazeRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';


const Header = ({openSidebar}) => {
  return (
    <div className='Header'>

        <div className='sidebar__Button' onClick = {openSidebar}>
            <button className='Button'>
                    <DehazeRoundedIcon sx={{ fontSize: 40 }} />
            </button>
        </div>

        <div className="Logo">
            <img alt='logo' />
        </div>

        <div className='add__Button'>
            <button className='Button'>
                <AddBoxRoundedIcon sx={{ fontSize: 40 }} />
            </button>
        </div>
        
    </div>
  )
}

export default Header