import React from 'react'
import { useState } from 'react'

export default function CarrierInfoForm({companyData, carrierCount, page}){

    const [carrierObj, setCarrierObj] = useState({
        carrierName: "",
        carrierPolicyNumber:"",
        benefitCategory:"",
        numberOfBills:0,
        billTypes:"",
        selfInsuredFunded:"",
        eadPaysCarrier:"",
        carrierContactFName:"",
        carrierContactLName:"",
        carrierContactEmail:"",
        companyPrimeContactFName:"",
        companyPrimeContactLName:"",
        companyPrimeContactTitle:"",
        carrierRates: null,
    })


   
  return (
    <form className={"form "+carrierCount} name="carrier-information" method="POST" data-netlify="true">
        <h2>Carrier/Plan Information</h2> 
        <div className="inputContainer" >
            <div className="inputSection" >
                <p>Carrier {carrierCount==page? carrierCount: ''}</p>
                <input 
                    onChange={(e)=>setCarrierObj({...carrierObj, carrierName: e.target.value})}  
                    value={carrierObj.carrierName} maxLength="120" 
                    autoComplete="off" 
                    type="text" 
                    name="company-name" 
                    required/>
            </div>
            <div className="inputSection" >
                <p>Benefit Category</p>
                <select 
                    onChange={(e)=>setCarrierObj({...carrierObj, benefitCategory: e.target.value})} 
                    value={carrierObj.benefitCategory}
                    name="benefit-category" id="benefit-category">
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
                <p>
                    {carrierObj.carrierName? `${carrierObj.carrierName} `:''}
                    Policy/Group Number</p>
                <input 
                    onChange={(e)=>setCarrierObj({...carrierObj, carrierPolicyNumber: e.target.value})}
                    value={carrierObj.carrierPolicyNumber}
                    maxLength="120" autoComplete="off" type="text" name="policy-number" required/>
            </div>
            <div className="inputSection" >
                <p>Number of Invoices/Bills</p>
                <input 
                    onChange={(e)=>setCarrierObj({...carrierObj, numberOfBills: e.target.value})}
                    value={carrierObj.carrierPolicyNumber}
                    maxLength="120" autoComplete="off" type="number" name="number-of-bills" required/>
            </div>
            <div className="inputSection" >
                <p>Bill Types: Select all that apply</p>
                <label className="checkbox" >
                    <input type="checkbox" name="bill-type" value="List-Bill"
                    /><span>List Bill</span>
                </label>
                <label className="checkbox" ><input type="checkbox" name="bill-type" value="Self-Bill"/><span>Self Bill</span></label>
                <label className="checkbox" ><input type="checkbox" name="bill-type" value="Other"/><span>Other</span></label>
            </div>
            <div className="inputSection" >
                <p>Are these coverages self-insured/self-funded</p>
                <label className="checkbox" >
                    <input
                    onChange={(e)=>setCarrierObj({...carrierObj, selfInsuredFunded: e.target.value})}
                    value={carrierObj.selfInsuredFunded}
                    type="radio" name="selfInsuredFunded" 
                    /><span>Yes</span>
                </label>
                <label className="checkbox" >
                    <input 
                    onChange={(e)=>setCarrierObj({...carrierObj, selfInsuredFunded: e.target.value})}
                    value={carrierObj.selfInsuredFunded}
                    type="radio" name="selfInsuredFunded" 
                    
                    /><span>No</span>
                </label>
            </div>
            <div className="inputSection" >
                <p>Will EAD pay this carrier?</p>
                <label className="checkbox" >
                    <input 
                    onChange={(e)=>setCarrierObj({...carrierObj, eadPaysCarrier: e.target.value})}
                    value={carrierObj.eadPaysCarrier}
                    type="radio" name="bill-type"/><span>Yes</span></label>
                <label className="checkbox" >
                    <input 
                    onChange={(e)=>setCarrierObj({...carrierObj, eadPaysCarrier: e.target.value})}
                    value={carrierObj.eadPaysCarrier}
                    type="radio" name="bill-type"/><span>No</span></label>
            </div>
            <div className="inputSection" >
                <p>{carrierObj.carrierName? `${carrierObj.carrierName} `:'Carrier' } Account Manager/Contact Name</p>
                <input
                onChange={(e)=>setCarrierObj({...carrierObj, carrierContactFName: e.target.value})}
                value={carrierObj.carrierContactFName}
                maxLength="120" autoComplete="off" type="text" name="carrier-contact-fname" placeholder='First Name' required/>
                <input 
                onChange={(e)=>setCarrierObj({...carrierObj, carrierContactLName: e.target.value})}
                value={carrierObj.carrierContactLName}
                maxLength="120" autoComplete="off" type="text" name="carrier-contact-lname" placeholder='Last Name' required/>
                <input
                onChange={(e)=>setCarrierObj({...carrierObj, carrierContactEmail: e.target.value})}
                value={carrierObj.carrierContactEmail}
                maxLength="120" autoComplete="off" type="text" name="carrier-contact-email" placeholder='Email' required/>
            </div>
            <div className="inputSection" >
                <p>{companyData.companyName? companyData.companyName:'Company' } Primary Contact</p>
                <input
                onChange={(e)=>setCarrierObj({...carrierObj, companyPrimeContactFName: e.target.value})}
                value={carrierObj.companyPrimeContactFName}
                maxLength="120" autoComplete="off" type="text" name="carrier-contact-fname" placeholder='First Name' required/>
                <input
                onChange={(e)=>setCarrierObj({...carrierObj, companyPrimeContactLName: e.target.value})}
                value={carrierObj.companyPrimeContactLName}
                maxLength="120" autoComplete="off" type="text" name="carrier-contact-lname" placeholder='Last Name' required/>
                <input 
                onChange={(e)=>setCarrierObj({...carrierObj, companyPrimeContactTitle: e.target.value})}
                value={carrierObj.companyPrimeContactTitle}
                maxLength="120" autoComplete="off" type="text" name="carrier-contact-title" placeholder='Title' required/>
            </div>
        
            <div className="inputSection" >
                <p>{carrierObj.carrierName? `${carrierObj.carrierName} `:'Carrier' }  Rates</p>
                <input
                    onChange={((e)=>setCarrierObj({...carrierObj, carrierRates: e.target.files}))}
                    type="file" id="myFile" name="filename">    
                </input>
            </div>

        </div>
    </form>
  )
}
