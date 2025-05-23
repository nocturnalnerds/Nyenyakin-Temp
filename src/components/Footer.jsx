import React from 'react';

const Footer = () => {
  const handleLogoClick = () => {
    // Scroll to welcome banner
    const welcomeSection = document.getElementById('welcome-banner');
    if (welcomeSection) {
      welcomeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-800/90 backdrop-blur-sm px-6 py-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between ">
        {/* Left side - Text content */}
        <div className="space-y-2">
          <p className="text-white text-lg">
            © 2025 Nyenyakin.id. All rights reserved.
          </p>
          <p className="text-white text-lg">
            Contact: nyenyakin@gmail.com
          </p>
        </div>

        {/* Right side - Logo */}
        <div 
          className="cursor-pointer transform hover:scale-105 transition-transform duration-200"
          onClick={handleLogoClick}
        >
          <img 
            src="/logo.svg"
            alt="Menyakin Logo" 
            className="w-20 h-20"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;