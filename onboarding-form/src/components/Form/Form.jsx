import React from 'react'
import {useState} from "react"

import GroupInfoForm from './GroupInfoForm'
import CarrierInfoForm from './CarrierInfoForm'
import './Form.scss'

export const Form = ({companyData, setCompanyData, carrierData, setCarrierData}) => {

  const [page, setPage] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

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
  
  const nextBtnHandler = function(){
    
    {
      page>0 ?
      setCarrierData(carrierData.push(carrierObj)):
      alert(companyData.companyName)
      setPage(page+1)
      
    }
    
    
    
  }

  const isFinishedHandler = function(){
    alert(companyData)
  }

  return (
    <section className='form-container' >
      <div className="form">
        <header><h1>EAD New Client Onboarding Form</h1></header>
        <main>
          {page==0 ? 
            <GroupInfoForm 
              companyData={companyData}
              setCompanyData={setCompanyData}
            /> : 
            <CarrierInfoForm 
              page={page}
              companyData={companyData}
              carrierData={carrierData}
              setCarrierData={setCarrierData}
              carrierObj={carrierObj}
              setCarrierObj={setCarrierObj}
            />
          }
          
          <div className='bottomNavigation' >

            {page>0 ?
              
              <div className="finishOption" >
              <h4>Click "Next" to continue and add more carriers. </h4>  
              <p>If you are finished listing carriers, select the box below to be taken to the last page and submit your responses.</p>
              <h4>Finished?</h4>
              <label className="isFinishedCheckbox" >
                <input 
                onChange={(e)=>setIsFinished(!isFinished)}
                value={isFinished}
                type="checkbox" name="isFinished"/>
                <span>I'm done, take me ot the end of the form</span></label>
              </div>
              : <div></div>}
            

            <div className="prevNextBtnContainer" >
              { page>0 ? <button onClick={()=>setPage(page-1)} >Previous</button> : <div></div> }

              {isFinished ?
                <button onClick={nextBtnHandler} >Finish/Submit</button> :
                <button onClick={nextBtnHandler} >Next</button>
             }
              
            </div>
            
          </div>
          
        </main>
        <footer>
          <p>If you have any questions about this form, please contact billing@employersadvantagedirect.com</p>
        </footer>
      </div>
    </section>
  )
}
