import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import OurCompany from './component/OurCompany';
import Product from './component/Product';
import ContactUs from './component/ContactUs';
import OurTeam from './component/OurTeam';
import Footer from './component/Footer';

function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/ourcompany' element={<OurCompany />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/contactus' element={<ContactUs />}></Route>
        <Route path='/ourteam' element={<OurTeam />}></Route>
      </Routes>
      <Footer />
    </>

  );
}

export default App;
