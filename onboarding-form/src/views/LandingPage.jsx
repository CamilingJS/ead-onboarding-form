import React from 'react'
import Navbar from '../components/Navbar/Navbar.jsx'
import LeftPane from '../components/LeftPane/LeftPane.jsx'
import Form from '../components/Form/Form.jsx'

const LandingPage = () => {
  return (
    <>
    <nav>
    <Navbar />
    </nav>
    <main>
    <LeftPane />
    <Form />
    </main>
    </>
  )
}

export default LandingPage