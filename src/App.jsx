import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './Components/Nav'
import Main from './Components/Main'
import Article from './Components/Article'
import { AboutUs, Login, Register, Subscribe } from './Components'

import { useTheme } from './Components/Theme'



 function App() {
  const { theme } = useContext(useTheme)

  return (
   <div className={`App ${theme}`}>
    <div className=' bg-[#070829f8] w-full'> 
    <Nav/>
    <Main />
    <Article/>
    <Subscribe/>
    <AboutUs/>
    <Login/>
    <Register/>
    </div>
    </div>
    
  )
}

export default App
