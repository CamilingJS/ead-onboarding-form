import React from 'react'
import { useContext } from 'react'
import { FormContext } from '../../Contexts/FormContext'

function CarrierInfoForm({carrierCount}){
const {carrierData, setCarrierData, companyData} = useContext(FormContext)
   
return (
    <form key={carrierCount} name="carrier-information" method="POST" data-netlify="true">
        <h2>Carrier/Plan Information</h2> 
        <div className="inputContainer" >
            <div className="inputSection" >
                <p>Carrier</p>
                <input 
                    onChange={(e)=>setCarrierData({...carrierData[carrierCount].carrierObj, carrierName: e.target.value})}  
                    value={carrierData[carrierCount].carrierObj.carrierName}
                    maxLength="120" 
                    autoComplete="off" 
                    type="text" 
                    name="company-name" 
                    required/>
            </div>
            <div className="inputSection" >
                <p>Benefit Category</p>
                <select 
                    onChange={(e)=>setCarrierData({...carrierData[carrierCount].carrierObj, benefitCategory: e.target.value})} 
                    value={carrierData[carrierCount].carrierObj.benefitCategory}
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
                    {carrierData[carrierCount].carrierObj.carrierName? `${carrierData[carrierCount].carrierObj.carrierName} `:''}
                    Policy/Group Number</p>
                <input 
                    onChange={(e)=>setCarrierData({...carrierData[carrierCount].carrierObj, carrierPolicyNumber: e.target.value})}
                    value={carrierData[carrierCount].carrierObj.carrierPolicyNumber}
                    maxLength="120" autoComplete="off" type="text" name="policy-number" required/>
            </div>
            <div className="inputSection" >
                <p>Number of Invoices/Bills</p>
                <input 
                    onChange={(e)=>setCarrierData({...carrierData[carrierCount].carrierObj, numberOfBills: e.target.value})}
                    value={carrierData[carrierCount].carrierObj.numberOfBills}
                    minLength="1" maxLength="20" autoComplete="off" type="number" id="number-of-bills" name="number-of-bills" required/>
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
                    onChange={(e)=>setCarrierData({...carrierData[carrierCount].carrierObj, selfInsuredFunded: e.target.value})}
                    value={carrierData[carrierCount].carrierObj.selfInsuredFunded}
                    type="radio" name="selfInsuredFunded" 
                    /><span>Yes</span>
                </label>
                <label className="checkbox" >
                    <input 
                    onChange={(e)=>setCarrierData({...carrierData[carrierCount].carrierObj, selfInsuredFunded: e.target.value})}
                    value={carrierData[carrierCount].carrierObj.selfInsuredFunded}
                    type="radio" name="selfInsuredFunded" 
                    
                    /><span>No</span>
                </label>
            </div>
            <div className="inputSection" >
                <p>Will EAD pay this carrier?</p>
                <label className="checkbox" >
                    <input 
                    onChange={(e)=>setCarrierData({...carrierData[carrierCount].carrierObj, eadPaysCarrier: e.target.value})}
                    value={carrierData[carrierCount].carrierObj.eadPaysCarrier}
                    type="radio" name="bill-type"/><span>Yes</span></label>
                <label className="checkbox" >
                    <input 
                    onChange={(e)=>setCarrierData({...carrierData[carrierCount].carrierObj, eadPaysCarrier: e.target.value})}
                    value={carrierData[carrierCount].carrierObj.eadPaysCarrier}
                    type="radio" name="bill-type"/><span>No</span></label>
            </div>
            <div className="inputSection" >
                <p>{carrierData[carrierCount].carrierObj.carrierName? `${carrierData[carrierCount].carrierObj.carrierName} `:'Carrier' } Account Manager/Contact Name</p>
                <input
                onChange={(e)=>setCarrierData({...carrierData[carrierCount].carrierObj, carrierContactFName: e.target.value})}
                value={carrierData[carrierCount].carrierObj.carrierContactFName}
                maxLength="120" autoComplete="off" type="text" name="carrier-contact-fname" placeholder='First Name' required/>
                <input 
                onChange={(e)=>setCarrierData({...carrierData[carrierCount].carrierObj, carrierContactLName: e.target.value})}
                value={carrierData[carrierCount].carrierObj.carrierContactLName}
                maxLength="120" autoComplete="off" type="text" name="carrier-contact-lname" placeholder='Last Name' required/>
                <input
                onChange={(e)=>setCarrierData({...carrierData[carrierCount].carrierObj, carrierContactEmail: e.target.value})}
                value={carrierData[carrierCount].carrierObj.carrierContactEmail}
                maxLength="120" autoComplete="off" type="text" name="carrier-contact-email" placeholder='Email' required/>
            </div>
            <div className="inputSection" >
                {carrierData[carrierCount].carrierObj.companyName ? <p>{carrierData[carrierCount].carrierObj.companyName} Contact</p> : <p> Primary Contact</p>}
            
                <input
                onChange={(e)=>setCarrierData({...carrierData[carrierCount].carrierObj, companyPrimeContactFName: e.target.value})}
                value={carrierData[carrierCount].carrierObj.companyPrimeContactFName}
                maxLength="120" autoComplete="off" type="text" name="carrier-contact-fname" placeholder='First Name' required/>
                <input
                onChange={(e)=>setCarrierData({...carrierData[carrierCount].carrierObj, companyPrimeContactLName: e.target.value})}
                value={carrierData[carrierCount].carrierObj.companyPrimeContactLName}
                maxLength="120" autoComplete="off" type="text" name="carrier-contact-lname" placeholder='Last Name' required/>
                <input 
                onChange={(e)=>setCarrierData({...carrierData[carrierCount].carrierObj, companyPrimeContactTitle: e.target.value})}
                value={carrierData[carrierCount].carrierObj.companyPrimeContactTitle}
                maxLength="120" autoComplete="off" type="text" name="carrier-contact-title" placeholder='Title' required/>
            </div>
        
            <div className="inputSection" >
                <p>{carrierData[carrierCount].carrierObj.carrierName? `${carrierData[carrierCount].carrierObj.carrierName} `:'Carrier' }  Rates</p>
                <input
                    onChange={((e)=>setCarrierData({...carrierData[carrierCount].carrierObj, carrierRates: e.target.files}))}
                    type="file" id="myFile" name="filename">    
                </input>
            </div>

        </div>
    </form>
  )
}


export default CarrierInfoForm
