import './App.css'
import { LeftPane } from './components/LeftPane/LeftPane'
import { Form } from './components/Form/Form'
import Navbar from './components/Navbar/Navbar'
import { useState } from 'react'
import { FormContext } from './Contexts/FormContext'

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
      <nav>
        <Navbar />
      </nav>
      <main>
        <LeftPane />
        <Form />
      </main>
      
    </div>
    </FormContext.Provider>
    
   
  )
}

export default App
