import React from 'react'
import {useState, useContext} from "react"
import { FormContext } from '../../Contexts/FormContext'

import GroupInfoForm from './GroupInfoForm'
import CarrierInfoForm from './CarrierInfoForm'
import './Form.scss'

export const Form = () => {

  const {companyData, setCompanyData, carrierData, setCarrierData} = useContext(FormContext)

  const [page, setPage] = useState(0)
  const [carrierCount, setCarrierCount] = useState(0)
  const [isFinished, setIsFinished] = useState(false)
  
  
  const prevBtnHandler = function (){
    setCarrierCount(carrierCount-1)
  }
  const nextBtnHandler = function(){ 
      setPage(page + 1) 
      setCarrierCount(carrierCount + 1)
      
  }

  const isFinishedHandler = function(){
    alert(companyData)
  }

  let carrierComponents = Array.from({length: carrierCount}, (_, i) =>(
    <CarrierInfoForm 
      page={page}
      carrierCount={carrierCount}
      carrierData={carrierData}
      setCarrierData={setCarrierData}
     
    />
  ) )   
  
  console.log(carrierComponents)
  

  return (
    <section className='form-container' >
      <div className="form">
        <header><h1>EAD New Client Onboarding Form</h1></header>
        <main>
          {page==0 ? 
            <GroupInfoForm 
              page={page}
            /> : 
            carrierComponents
          }
          
          <div className='bottomNavigation' >
            {page ?
              <div className="finishOption" >
              <h4>Click "Next" to continue and add more carriers. </h4>  
              <p>If you are finished listing carriers, select the box below to be taken to the last page and submit your responses.</p>
              <h4>Finished?</h4>
              <label className="isFinishedCheckbox" >
                <input 
                onChange={(e)=>setIsFinished(!isFinished)}
                value={isFinished}
                type="checkbox" name="isFinished"/>
                <span>I'm done, take me to the end of the form</span></label>
              </div>
              : <div></div>}
            

            <div className="prevNextBtnContainer" >
              { page>0 ? <button onClick={()=>setPage(page-1)} >Previous</button> : <div></div> }

              {isFinished ?
                <button onClick={isFinishedHandler} >Finish/Submit</button> :
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
