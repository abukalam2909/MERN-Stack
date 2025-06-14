
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home.jsx';
import Product from './pages/Product/Product.jsx';
import Contact from './pages/Contact/Contact.jsx';
import SignUp from './pages/Auth/SignUp.jsx';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Product/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path='/register' element={<SignUp/>} />
        </Routes>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}/>
    </>
  )
}

export default App