import React from 'react'
import { useContext } from 'react'
import { FormContext } from '../Contexts/FormContext'

import './Summary.scss'


const Summary = () => {
const {companyData, carrierObj, carrierData} = useContext(FormContext)

  return (
    <div className='Summary' >
        {Object.keys(companyData).map(keys=>
            <h5>{keys}</h5>)}
        
        {Object.values(companyData).map(val => 
            <h5>{val}</h5>)}

        

    </div>
  )
}

export default Summary