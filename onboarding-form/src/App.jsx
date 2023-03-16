
import './App.css'
import { LeftPane } from './components/LeftPane/LeftPane'
import { Form } from './components/Form/Form'
import Navbar from './components/Navbar/Navbar'
import { useState } from 'react'

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

  const [carrierData, setCarrierData] = useState({})

  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>
      <main>
        <LeftPane />
        <Form 
          companyData={companyData} 
          setCompanyData={setCompanyData}
          carrierData={carrierData} 
          setCarrierData={setCarrierData}
          />
      </main>
      
    </div>
  )
}

export default App
