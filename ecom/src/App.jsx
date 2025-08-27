import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Companies from './Companies/Companies'
import Residencies from './Residencies/Residencies'
import Value from './Components/Value/value'
import Contact from './Components/Contact/contact'
import GetStarted from './Components/GetStarted/GetStarted'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (<div className='App'>
    <div className='wrap'>
      <div className="white-gradient"/>
    <Header/>
    <Hero/>
    </div>
    <Companies/>
    <Residencies/>  
    <Value/>
    <Contact/>
    <GetStarted/>
    <Footer/>
  </div>)
}

export default App


//  <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>