import React from 'react'
import {IoIosCall} from 'react-icons/io'
import {CiMail} from 'react-icons/ci'

import './Navbar.css';

function Navbar() {
  return (
    <div className='nav-main'>
      <h2>Open Auto</h2>
      <div className='nav-child'>
    <div className='call-cont'>
    <IoIosCall className='call-icon'/>
    <h6>+769 586 4558</h6>
    </div>
    <div className='call-cont'>
    <CiMail className='call-icon'/>
    <h6 className='service'>service@openauto.ca</h6>
    </div>
    <div><button className='button'>Download the mobile app</button></div>
    
    </div>

    </div>
  )
}

export default Navbar
