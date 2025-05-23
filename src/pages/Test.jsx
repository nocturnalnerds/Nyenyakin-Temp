import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PSQITestPage from '../components/PSQITestPage';

const Test = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-blue-800">
      <Navbar currentPage="test" />
      <PSQITestPage />
      <Footer />
    </div>
  );
};

export default Test;
