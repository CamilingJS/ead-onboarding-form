import React from 'react'
import {useState} from "react"

import GroupInfoForm from './GroupInfoForm'
import CarrierInfoForm from './CarrierInfoForm'
import './Form.scss'

export const Form = () => {

  const [page, setPage] = useState(0)
  console.log(page)

  return (
    <section className='form-container' >
      <div className="form">
        <header><h1>EAD New Client Onboarding Form</h1></header>
        <main>
          {page==0 ? <GroupInfoForm /> : <CarrierInfoForm page={page} />}
          
          <button onClick={()=>setPage( page +1 )} >Next</button>
        </main>
        <footer>
          <p>If you have any questions about this form, please contact billing@employersadvantagedirect.com</p>
        </footer>
      </div>
    </section>
  )
}
