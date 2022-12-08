import './Backdrop.css';

import React from 'react'

const Backdrop = ({sidebar, closeSidebar}) => {
  return (
    <div className={sidebar? 'Backdrop Backdrop--open' : 'Backdrop'} onClick={closeSidebar}>

    </div>
  )
}

export default Backdrop