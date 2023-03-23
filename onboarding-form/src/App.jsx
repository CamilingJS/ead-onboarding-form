import './App.css'
import {Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import { FormContext } from './Contexts/FormContext'

import LandingPage from './views/LandingPage'
import Navbar from './components/Navbar/Navbar'; 

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


  const [carrierData, setCarrierData] = useState({})

return (
<FormContext.Provider value={{companyData, setCompanyData, carrierObj, setCarrierObj, carrierData, setCarrierData}} >
  <div className="App">
  <Routes>
    <Route path='/'
      element={
        <LandingPage />
      }
      
    />
  </Routes>
     
  </div>
</FormContext.Provider>
)
}

export default App
