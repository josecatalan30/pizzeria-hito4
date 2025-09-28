import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
//import Home from './components/Home'
import Footer from './components/Footer'
//import RegisterPage from './components/RegisterPage'
//import LoginPage from './components/LoginPage'
//import Cart from './components/Cart'
import Pizza from './components/Pizza'

function App() {
  return (
    <>
      <Navbar />
     {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/cart' element={<Cart />} />
      </Routes> */}
      <Pizza />
      <Footer />
    </>
  )
}

export default App