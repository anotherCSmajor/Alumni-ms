import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar1 from './components/nav-bar/v1/navbar1'
import Landingpage from './pages/landingpage/landigpage'
import Footer from "./components/footer/footer"
import { Routes,Route } from "react-router-dom";
import SignUp from './pages/SignUp/SignUp';
import  Login  from "./pages/login/login";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-gray-100 w-[100%] box-border'>
     <Navbar1/>
     <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
       <Route path='/Login' element={<Login/>}/>
     </Routes>
    
     <Footer />
    </div>

    </>
  )
}

export default App
