import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GoodResult from '../components/Goodresult';

const Goodpage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-blue-800">
      <Navbar currentPage="test" />
      <GoodResult />
      <Footer />
    </div>
  );
};

export default Goodpage;