import React from 'react'

import './Form.scss'

const SubForm = () => {
  return (
    <form action="">
       <h2>Group Information</h2> 
       <div className="inputContainer" >
        <div className="inputSection" >
          <p>Company Name</p>
          <input type="text" name="" id="" required/>
        </div>
        <div className="inputSection" >
          <p>Company Website</p>
          <input type="text" name="" id="" required/>
        </div>
        <div className="inputSection" >
          <p>Address</p>
          <input type="text" name="" id="" placeholder='Street Address' required/>
          <input type="text" name="" id="" placeholder='City, State, Zip' required/>
        </div>
        <div className="inputSection" >
          <p>Benefits Administration System</p>
          <input type="text" name="" id="" placeholder=' Workday, BSwift, ADP, etc.' required/>
        </div>
        <div className="inputSection" >
          <p>Medical Plan Renewal Date</p>
          <input type="text" name="" id="" required/>
        </div>
        <div className="inputSection" >
          <p>EAD Service Start Date</p>
          <input type="text" name="" id="" required/>
        </div>
        <div className="inputSection" >
          <p>Primary Group Contact</p>
          <input type="text" name="" id="" placeholder='First Name' required/>
          <input type="text" name="" id="" placeholder='Last Name' required/>
          <input type="text" name="" id="" placeholder='Title' required/>
        </div>
        <div className="inputSection" >
          <p>Contact Info</p>
          <input type="text" name="" id="" placeholder='Email' required/>
          <input type="text" name="" id="" placeholder='Phone Number' required/>
        </div>
        
        <div className='nextButton' >Next</div>
       
       
       </div>
       
    </form>
  )
}

export default SubForm