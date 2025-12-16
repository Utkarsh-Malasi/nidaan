import { useState } from 'react';
import logoImg from '../images/Logo_Nidaan-TPS.pdf.png';

const Header = ({ activePage, setActivePage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'space', label: 'Gallery' },
    { id: 'team', label: 'Our Team' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'internship', label: 'Internship' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavigation = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false); // Close mobile menu when navigating
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-4">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-24 flex justify-between items-center">
        <div className="flex items-center gap-4 flex-shrink-0 mr-8">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('home');
            }}
            className="flex items-center gap-4"
          >
            <img src={logoImg} alt="Nidaan Logo" className="h-16 w-auto sm:h-20" />
            <span className="flex flex-col leading-tight">
              <span className="text-xl sm:text-2xl font-bold text-blue-900 " style={{ fontFamily: '"Bookman Old Style", Bookman, "Times New Roman", serif' }}>Nidaan</span>
              <span className="hidden sm:inline text-xs text-gray-600 uppercase tracking-widest whitespace-nowrap" style={{ fontFamily: '"Bookman Old Style", Bookman, "Times New Roman", serif' }}>The Psychological Services</span>
            </span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6 flex-1 justify-center">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(item.id);
              }}
              className={`whitespace-nowrap text-sm font-medium transition-colors duration-200 ${activePage === item.id ? 'text-teal-600' : 'text-slate-800 hover:text-teal-600'}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        
        {/* Desktop CTA Button removed as requested */}
        
        {/* Mobile menu button */}
        <div className="xl:hidden flex items-center">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-text hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded-md p-2"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} xl:hidden bg-white shadow-lg absolute left-0 right-0 top-full z-50 w-full`}> 
        <nav className="px-5 w-full flex flex-col space-y-1 py-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(item.id);
              }}
              className={`whitespace-nowrap text-lg font-medium py-4 transition-colors duration-200 ${activePage === item.id ? 'text-teal-600 font-semibold' : 'text-slate-800 hover:text-teal-600'}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
