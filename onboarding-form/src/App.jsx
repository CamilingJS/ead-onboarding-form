
import './App.css'
import { LeftPane } from './components/LeftPane/LeftPane'
import { Form } from './components/Form/Form'
import Navbar from './components/Navbar/Navbar'

function App() {
  

  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>
      <main>
        <LeftPane />
        <Form />
      </main>
      
    </div>
  )
}

export default App
