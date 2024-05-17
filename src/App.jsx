
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import EnquiryForm from './components/EnquiryForm'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Skills from './components/Skills'

function App() {
  

  return (
    <div>
    <Navbar/>
    <Hero/>
    <Skills/>
    <About/>
    <EnquiryForm/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App
