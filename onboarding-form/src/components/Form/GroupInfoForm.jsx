import React from 'react'

import './Form.scss'

export default function GroupInfoForm(){
  
  return (
    <form name="group-information" method="POST" data-netlify="true">
       <h2>Group Information</h2> 
       <div className="inputContainer" >
        <div className="inputSection" >
          <p>Company Name</p>
          <input maxLength="120" autoComplete="off" type="text" name="company-name" required/>
        </div>
        <div className="inputSection" >
          <p>Company Website</p>
          <input maxLength="120" type="url" name="company-website"/>
        </div>
        <div className="inputSection" >
          <p>Address</p>
          <input type="text" name="street-address" placeholder="Street Address" required/>
          <input type="text" name="city-state-zip" placeholder="City, State, Zip" required/>
        </div>
        <div className="inputSection" >
          <p>Benefits Administration System</p>
          <input type="text" name="ben-admin-system" placeholder="Workday, BSwift, ADP, etc." required/>
        </div>
        <div className="inputSection" >
          <p>Medical Plan Renewal Date</p>
          <input type="date" name="plan-renewal-date" required/>
        </div>
        <div className="inputSection" >
          <p>EAD Service Start Date</p>
          <input type="date" name="ead-start-date" required/>
        </div>
        <div className="inputSection" >
          <p>Primary Group Contact</p>
          <input type="text" name="first-name" placeholder='First Name' required/>
          <input type="text" name="last-name" placeholder='Last Name' required/>
          <input type="text" name="title" placeholder='Title' required/>
        </div>
        <div className="inputSection" >
          <p>Contact Info</p>
          <input type="email" name="email" placeholder='Email' required/>
          <input type="tel" name="phone" placeholder='Phone Number' required/>
        </div>
       
       </div>
       
    </form>
    
  )
}
