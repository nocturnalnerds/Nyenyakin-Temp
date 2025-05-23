import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Tiplist from '../components/Tipslist';

const Tips = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-blue-800">
      <Navbar currentPage="tips" />
      <Tiplist />
      <Footer />
    </div>
  );
};
export default Tips;
