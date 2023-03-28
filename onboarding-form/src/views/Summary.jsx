import React from 'react'
import { useContext } from 'react'
import { FormContext } from '../Contexts/FormContext'

import './Summary.scss'


const Summary = () => {
  const {companyData, carrierObj} =useContext(FormContext)

  return (
    <div className='Summary' >
      <h1>Summary</h1>
        {Object.entries(companyData).map(val => val)}
        
        {/* {console.log(Object.entries(carrierObj))} */}

          <h1>{companyData.companyName}</h1>
          {/* {console.log(companyData.companyName)} */}
          <h1>{carrierObj.carrierName}</h1>

    </div>
  )
}

export default Summary