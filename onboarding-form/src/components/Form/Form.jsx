import React from 'react'
import SubForm from './SubForm'

import './Form.scss'

export const Form = () => {
  return (
    <section className='form-container' >
      <div className="form">
        <header><h1>EAD New Client Onboarding From</h1></header>
        <main>
          <SubForm />
        </main>
        <footer>
          <p>If you have any questions about this form, please contact billing@employersadvantagedirect.com</p>
        </footer>
      </div>
    </section>
  )
}
