import React from 'react'

import './LeftPane.scss'

const LeftPane = () => {
  return (
    <aside className='left-pane' >

      <div className='overlay'>
        <div className="darkOverlay">
          <div className='copy' >
            <h1>WELCOME!</h1>
            <p>Thank you for partnering with Employers Advantage Direct! Please complete this form to ensure we can manage implementation as smoothly as possible.</p>
          </div>
          <div className='design' >
            <div className='overlayGreen' ></div>
            <div className='overlayBlue' ></div>
          </div>
        </div>
        
        
      </div>

    </aside>
  )
}

export default LeftPane
