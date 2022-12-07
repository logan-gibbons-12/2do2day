import './Backdrop.css';

import React from 'react'

const Backdrop = ({sidebar}) => {
  return (
    <div className={sidebar? 'Backdrop Backdrop--open' : 'Backdrop'}>

    </div>
  )
}

export default Backdrop