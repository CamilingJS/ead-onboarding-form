import './App.css'
import {Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import { FormContext } from './Contexts/FormContext'

import LandingPage from './views/LandingPage'
import Summary from './views/Summary'

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

function App() {

  const [companyData, setCompanyData] = useState({
    companyName: "",
    website: "",
    address: "",
    cityStateZip: "",
    benAdmin:"",
    renewalDate:"",
    eadStartDate: "",
    contactFName:"",
    contactLName:"",
    contactTitle:"",
    contactEmail:"",
    contactPhone:""
  })



  const [carrierData, setCarrierData] = useState([{
    ...baseCarrierObj
  }])

return (
<FormContext.Provider value={{companyData, setCompanyData, carrierData, setCarrierData}} >
  <div className="App">
  <Routes>
    <Route path='/'
      element={
        <LandingPage />
      }
      
    />
    <Route path='/summary'
      element={
        <Summary />
      }
    />
  </Routes>
     
  </div>
</FormContext.Provider>
)
}

export default App
