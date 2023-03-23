import React from 'react'
import { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="navbar" >
      <div className="navbar-logo" >
        <Link to='/'>
        <img src={'https://res.cloudinary.com/dxctpvd8v/image/upload/v1678492400/EAD-Onboarding/EADLogo_Horizontal_rc0l4d.png'}  alt="logo" />
        </Link>
      </div>
      <ul className="navbar-desktop" >
      {['Home', 'Events', 'About Us', 'Testimonials', 'FAQ'].map((item)=>(
        <li className='' key={`link-${item}`}>
          <a href={item=='Home'?'/':
          (item=='Events'? 'https://employersadvantagedirect.com/events/':
          (item=='About Us'? 'https://employersadvantagedirect.com/about-employers-advantage-direct/'
          :(item=='Testimonials'? `https://employersadvantagedirect.com/testimonials/`:
          (item=='FAQ'? `https://employersadvantagedirect.com/faq/`:`/`))))
         }>{item}</a>
        </li>
      ))}
      </ul>
      
      <div className='navbar-mobile' >
        <HiMenuAlt4 onClick={()=> setToggle(true)} />
        {
          toggle && (
            <motion.div
              whileInView={{x: [300,0]}}
              transition={{duration: 0.85, ease: 'easeOut'}}
            >
              <HiX onClick={()=>setToggle(false)} />
              <ul>
                {['home', 'events', 'about us', 'testimonials', 'FAQ'].map((item)=>(
                  <li key={item}>
                   <a href={`#${item}`} onClick={()=>setToggle(false)} >{item}</a>
                  </li>
                ))}
              </ul>
              
            </motion.div>
          )
        }
      </div>

    </nav>
    
  )
}

export default Navbar