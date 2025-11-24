import { useState } from 'react'
import './App.css'
import bgImage from './images/background.png'

// Import components
import Header from './components/Header'
import Footer from './components/Footer'

// Import pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceIndividual from './pages/ServiceIndividual'
import ServiceCouples from './pages/ServiceCouples'
import ServiceFamily from './pages/ServiceFamily'
import Space from './pages/Space'
import Team from './pages/Team'
import Testimonials from './pages/Testimonials'
import Internship from './pages/Internship'
import Contact from './pages/Contact'

function App() {
  // State to track the active page
  const [activePage, setActivePage] = useState('home')

  // Custom page navigation function that includes scroll to top
  const handlePageChange = (page) => {
    setActivePage(page);
    window.scrollTo(0, 0); // Scroll to top when page changes
  }

  // Function to render the active page
  const renderActivePage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={handlePageChange} />
      case 'about':
        return <About />
      case 'services':
        return <Services setActivePage={handlePageChange} />
      case 'service-individual':
        return <ServiceIndividual setActivePage={handlePageChange} />
      case 'service-couples':
        return <ServiceCouples setActivePage={handlePageChange} />
      case 'service-family':
        return <ServiceFamily setActivePage={handlePageChange} />
      case 'space':
        return <Space />
      case 'team':
        return <Team setActivePage={handlePageChange} />
      case 'testimonials':
        return <Testimonials />
      case 'internship':
        return <Internship setActivePage={handlePageChange} />
      case 'contact':
        return <Contact />
      default:
        return <Home setActivePage={handlePageChange} />
    }
  }

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <Header activePage={activePage} setActivePage={handlePageChange} />
      <main className="flex-grow">
        {renderActivePage()}
      </main>
      <Footer setActivePage={handlePageChange} />
    </div>
  )
}
export default App
