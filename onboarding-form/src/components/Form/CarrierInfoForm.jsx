import React from 'react'
import { useContext } from 'react'
import { FormContext } from '../../Contexts/FormContext'


const baseCarrierObj = {
    carrierNum: 0, 
    carrierName: "",
    carrierPolicyNumber:"",
    benefitCategory:"",
    numberOfBills: 0,
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
  }


function CarrierInfoForm({carrierCount}){
const {carrierData, setCarrierData, companyData} = useContext(FormContext)
   
return (
    <form key={carrierCount} name="carrier-information">
        <h2>Carrier/Plan Information</h2> 
        <div className="inputContainer" >
            <div className="inputSection" >
                <p>Carrier</p>
                
                <input 
                    onChange={(e)=>setCarrierData({...baseCarrierObj, carrierName:e.target.value})}
                    // onChange={(e)=>setCarrierData({...carrierData[carrierCount], carrierName: e.target.value})}  
                    // value={carrierData[carrierCount].carrierName}
                    value={baseCarrierObj.carrierName}
                    maxLength="120" 
                    autoComplete="off" 
                    type="text" 
                    name="company-name" 
                    required/>
            </div>
            <div className="inputSection" >
                <p>Benefit Category</p>
                <select 
                    // onChange={(e)=>setCarrierData({...carrierData[carrierCount], benefitCategory: e.target.value})} 
                    // value={carrierData[carrierCount].benefitCategory}
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
                    {/* {carrierData[carrierCount].carrierName? `${carrierData[carrierCount].carrierName} `:''} */}
                    Policy/Group Number</p>
                <input 
                    // onChange={(e)=>setCarrierData({...carrierData[carrierCount], carrierPolicyNumber: e.target.value})}
                    // value={carrierData[carrierCount].carrierPolicyNumber}
                    maxLength="120" autoComplete="off" type="text" name="policy-number" required/>
            </div>
            <div className="inputSection" >
                <p>Number of Invoices/Bills</p>
                <input 
                    // onChange={(e)=>setCarrierData({...carrierData[carrierCount], numberOfBills: e.target.value})}
                    // value={carrierData[carrierCount].numberOfBills}
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
                    // onChange={(e)=>setCarrierData({...carrierData[carrierCount], selfInsuredFunded: e.target.value})}
                    // value={carrierData[carrierCount].selfInsuredFunded}
                    type="radio" name="selfInsuredFunded" 
                    /><span>Yes</span>
                </label>
                <label className="checkbox" >
                    <input 
                    // onChange={(e)=>setCarrierData({...carrierData[carrierCount], selfInsuredFunded: e.target.value})}
                    // value={carrierData[carrierCount].selfInsuredFunded}
                    type="radio" name="selfInsuredFunded" 
                    
                    /><span>No</span>
                </label>
            </div>
            <div className="inputSection" >
                <p>Will EAD pay this carrier?</p>
                <label className="checkbox" >
                    <input 
                    // onChange={(e)=>setCarrierData({...carrierData[carrierCount], eadPaysCarrier: e.target.value})}
                    // value={carrierData[carrierCount].eadPaysCarrier}
                    type="radio" name="bill-type"/><span>Yes</span></label>
                <label className="checkbox" >
                    <input 
                    // onChange={(e)=>setCarrierData({...carrierData[carrierCount], eadPaysCarrier: e.target.value})}
                    // value={carrierData[carrierCount].eadPaysCarrier}
                    type="radio" name="bill-type"/><span>No</span></label>
            </div>
            <div className="inputSection" >
                {/* <p>{carrierData[carrierCount].carrierName? `${carrierData[carrierCount].carrierName} `:'Carrier' } Account Manager/Contact Name</p> */}
                <input
                // onChange={(e)=>setCarrierData({...carrierData[carrierCount], carrierContactFName: e.target.value})}
                // value={carrierData[carrierCount].carrierContactFName}
                maxLength="120" autoComplete="off" type="text" name="carrier-contact-fname" placeholder='First Name' required/>
                <input 
                // onChange={(e)=>setCarrierData({...carrierData[carrierCount], carrierContactLName: e.target.value})}
                // value={carrierData[carrierCount].carrierContactLName}
                maxLength="120" autoComplete="off" type="text" name="carrier-contact-lname" placeholder='Last Name' required/>
                <input
                // onChange={(e)=>setCarrierData({...carrierData[carrierCount], carrierContactEmail: e.target.value})}
                // value={carrierData[carrierCount].carrierContactEmail}
                maxLength="120" autoComplete="off" type="text" name="carrier-contact-email" placeholder='Email' required/>
            </div>
            <div className="inputSection" >
                {/* {carrierData[carrierCount].companyName ? <p>{carrierData[carrierCount].companyName} Contact</p> : <p> Primary Contact</p>} */}
            
                <input
                // onChange={(e)=>setCarrierData({...carrierData[carrierCount], companyPrimeContactFName: e.target.value})}
                // value={carrierData[carrierCount].companyPrimeContactFName}
                maxLength="120" autoComplete="off" type="text" name="carrier-contact-fname" placeholder='First Name' required/>
                <input
                // onChange={(e)=>setCarrierData({...carrierData[carrierCount], companyPrimeContactLName: e.target.value})}
                // value={carrierData[carrierCount].companyPrimeContactLName}
                maxLength="120" autoComplete="off" type="text" name="carrier-contact-lname" placeholder='Last Name' required/>
                <input 
                // onChange={(e)=>setCarrierData({...carrierData[carrierCount], companyPrimeContactTitle: e.target.value})}
                // value={carrierData[carrierCount].companyPrimeContactTitle}
                maxLength="120" autoComplete="off" type="text" name="carrier-contact-title" placeholder='Title' required/>
            </div>
        
            <div className="inputSection" >
                {/* <p>{carrierData[carrierCount].carrierName? `${carrierData[carrierCount].carrierName} `:'Carrier' }  Rates</p> */}
                <input
                    // onChange={((e)=>setCarrierData({...carrierData[carrierCount], carrierRates: e.target.files}))}
                    type="file" id="myFile" name="filename">    
                </input>
            </div>

        </div>
    </form>
  )
}


export default CarrierInfoForm
