import { Route, Routes } from 'react-router-dom'
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Butterfly from './Butterfly.jsx';


export default function App() {
  return (

    <>
    <Header />
    {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Butterfly />
    <Footer />
    </>
   
  )
}