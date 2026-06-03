import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './Home'
import Logo from './assets/images/footer-logo.png'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-h-screen flex flex-col items-center justify-center text-center'>
            <div className='logo-img'>
                <img src={Logo} alt="" className='mx-auto'/>
            </div>
          <h1 className='md:text-[60px] text-[35px] bg-gradient-to-r from-[#afafaf] to-[#afafaf] bg-clip-text text-transparent'>Coming Soon</h1>
          <Home />
        </div>
        
    
    </>
  )
}

export default App
