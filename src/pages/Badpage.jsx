import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BadResult from '../components/BadResult';

const Badpage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-blue-800">
      <Navbar currentPage="test" />
      <BadResult />
      <Footer />
    </div>
  );
};

export default Badpage;