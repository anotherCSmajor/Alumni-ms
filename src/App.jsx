import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Feeds   from "./pages/Feeds/feeds";
import Navbar2 from "./components/navbar2/navbar2";
import Navbar1 from './components/nav-bar/v1/navbar1'
import Landingpage from './pages/landingpage/landigpage'
import Footer from "./components/footer/footer"
import { Routes,Route } from "react-router-dom";
import SignUp from './pages/SignUp/SignUp';
import  Login  from "./pages/login/login";
import Connection from "./pages/connection/connection";
import Messages from './pages/messages/messages';
import Profile from "./pages/profile/profile";
function App() {
  const [count, setCount] = useState(0)
      const isLogin =true;
  return (
    <>
    <div className='bg-gray-100 w-[100%] box-border'>
     {isLogin?< Navbar2 />:<Navbar1/>}
     <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
       <Route path='/Login' element={<Login/>}/>
       <Route path='/feed' element={<Feeds />}/>
        <Route path='/Connection' element={<Connection />}/>
        <Route path='/Messages' element={<Messages />}/>
         <Route path='/profile/:id' element={<Profile />}/>
     </Routes>
    
     <Footer />
    </div>

    </>
  )
}

export default App
