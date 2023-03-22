import React from 'react'
import { useContext } from 'react'
import { FormContext } from '../../Contexts/FormContext'

import './Form.scss'

export default function GroupInfoForm(){

  const {companyData, setCompanyData} =useContext(FormContext)
  
  return (
    <form name="group-information" method="POST" data-netlify="true">
       <h2>Group Information</h2> 
       <div className="inputContainer" >
        <div className="inputSection" >
          <p>Company Name</p>
          <input 
            onChange={(e)=>setCompanyData({...companyData, companyName: e.target.value})}
            value={companyData.companyName} 
            maxLength="120" autoComplete="off" type="text" name="company-name" required/>
        </div>
        <div className="inputSection" >
          <p>Company Website</p>
          <input
            onChange={(e)=>setCompanyData({...companyData, website: e.target.value})}
            value={companyData.website}
            maxLength="120" type="url" name="company-website"/>
        </div>
        <div className="inputSection" >
          <p>Address</p>
          <input 
            onChange={(e)=>setCompanyData({...companyData, address: e.target.value})}
            value={companyData.address}
            type="text" name="street-address" placeholder="Street Address" required/>
          <input 
            onChange={(e)=>setCompanyData({...companyData, cityStateZip: e.target.value})}
            value={companyData.cityStateZip}
            type="text" name="city-state-zip" placeholder="City, State, Zip" required/>
        </div>
        <div className="inputSection" >
          <p>Benefits Administration System</p>
          <input 
            onChange={(e)=>setCompanyData({...companyData, benAdmin: e.target.value})}
            value={companyData.benAdmin}
            type="text" name="ben-admin-system" placeholder="Workday, BSwift, ADP, etc." required/>
        </div>
        <div className="inputSection" >
          <p>Medical Plan Renewal Date</p>
          <input 
            onChange={(e)=>setCompanyData({...companyData, renewalDate: e.target.value})}
            value={companyData.renewalDate}
            type="date" name="plan-renewal-date" required/>
        </div>
        <div className="inputSection" >
          <p>EAD Service Start Date</p>
          <input 
            onChange={(e)=>setCompanyData({...companyData, eadStartDate: e.target.value})}
            value={companyData.eadStartDate}
            type="date" name="ead-start-date" required/>
        </div>
        <div className="inputSection" >
          <p>Primary Group Contact</p>
          <input 
            onChange={(e)=>setCompanyData({...companyData, contactFName: e.target.value})}
            value={companyData.contactFName}
            type="text" name="first-name" placeholder='First Name' required/>
          <input 
            onChange={(e)=>setCompanyData({...companyData, contactLName: e.target.value})}
            value={companyData.contactLName}
            type="text" name="last-name" placeholder='Last Name' required/>
          <input 
            onChange={(e)=>setCompanyData({...companyData, contactTitle: e.target.value})}
            value={companyData.contactTitle}
            type="text" name="title" placeholder='Title' required/>
        </div>
        <div className="inputSection" >
          <p>Contact Info</p>
          <input 
            onChange={(e)=>setCompanyData({...companyData, contactEmail: e.target.value})}
            value={companyData.contactEmail}
            type="email" name="email" placeholder='Email' required/>
          <input 
            onChange={(e)=>setCompanyData({...companyData, contactPhone: e.target.value})}
            value={companyData.contactPhone}
            type="tel" name="phone" placeholder='Phone Number' required/>
        </div>
       
       </div>
       
    </form>
    
  )
}
