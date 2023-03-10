
import './App.css'
import { LeftPane } from './components/LeftPane/LeftPane'
import Navbar from './components/Navbar/Navbar'

function App() {
  

  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>
      <main>
        <LeftPane />
      </main>
      
    </div>
  )
}

export default App
