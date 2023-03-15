import React from 'react'
import { useState } from 'react'

export default function CarrierInfoForm({page, company}){
   
    const [carrier, setCarrier] = useState("")


    const selectHandler = function(){
        
        console.log("hello")
    }

  return (
    <form name="carrier-information" method="POST" data-netlify="true">
        <h2>Carrier/Plan Information</h2> 
        <div className="inputContainer" >
            <div className="inputSection" >
                <p>Carrier {page}</p>
                <input 
                    onChange={(e)=>setCarrier(e.target.value)}  
                    value={carrier} maxLength="120" 
                    autoComplete="off" 
                    type="text" 
                    name="company-name" 
                    required/>
            </div>
            <div className="inputSection" >
                <p>Benefit Category</p>
                <select onChange={(e)=>selectHandler} name="benefit-category" id="benefit-category">
                    <option value="">--Select Benefit--</option>
                    <option value="Medical">Medical</option>
                    <option value="Dental">Dental</option>
                    <option value="Vision">Vision</option>
                    <option value="Life">Life/Disability</option>
                    <option value="Supplemental">Supplemental Medical</option>
                    <option value="Misc">Misc.</option>
                </select>
            </div>
            <div className="inputSection" >
                <p>{carrier? `${carrier} `:''}Policy/Group Number</p>
                <input maxLength="120" autoComplete="off" type="text" name="policy-number" required/>
            </div>
            <div className="inputSection" >
                <p>Number of Invoices/Bills</p>
                <input maxLength="120" autoComplete="off" type="number" name="number-of-bills" required/>
            </div>
            <div className="inputSection" >
                <p>Bill Types: Select all that apply</p>
                <label className="checkbox" ><input type="checkbox" name="bill-type" value="List Bill"/><span>List Bill</span></label>
                <label className="checkbox" ><input type="checkbox" name="bill-type" value="Self Bill"/><span>Self Bill</span></label>
                <label className="checkbox" ><input type="checkbox" name="bill-type" value="Other"/><span>Other</span></label>
            </div>
            <div className="inputSection" >
                <p>Are these coverages self-insured/self-funded</p>
                <label className="checkbox" ><input type="radio" name="bill-type" value="Yes"/><span>Yes</span></label>
                <label className="checkbox" ><input type="radio" name="bill-type" value="No"/><span>No</span></label>
            </div>
            <div className="inputSection" >
                <p>Will EAD pay this carrier?</p>
                <label className="checkbox" ><input type="radio" name="bill-type" value="Yes"/><span>Yes</span></label>
                <label className="checkbox" ><input type="radio" name="bill-type" value="No"/><span>No</span></label>
            </div>
            <div className="inputSection" >
                <p>{carrier? carrier:'Carrier' } Account Manager/Contact Name</p>
                <input maxLength="120" autoComplete="off" type="text" name="carrier-contact-fname" placeholder='First Name' required/>
                <input maxLength="120" autoComplete="off" type="text" name="carrier-contact-lname" placeholder='Last Name' required/>
                <input maxLength="120" autoComplete="off" type="text" name="carrier-contact-email" placeholder='Email' required/>
            </div>
            <div className="inputSection" >
                <p>{company? company:'Company' } Primary Contact</p>
                <input maxLength="120" autoComplete="off" type="text" name="carrier-contact-fname" placeholder='First Name' required/>
                <input maxLength="120" autoComplete="off" type="text" name="carrier-contact-lname" placeholder='Last Name' required/>
                <input maxLength="120" autoComplete="off" type="text" name="carrier-contact-title" placeholder='Title' required/>
            </div>
        
            <div className="inputSection" >
                <p>Carrier Rates</p>
                <input type="file" id="myFile" name="filename"></input>
            </div>

        </div>
    </form>
  )
}
