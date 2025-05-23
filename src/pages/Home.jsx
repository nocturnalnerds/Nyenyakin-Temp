import React from 'react';
import Navbar from '../components/Navbar';
import Welcome from '../components/Welcome';
import Desc from '../components/Desc';
import Articlebento from '../components/Articlebento';
import How from '../components/How';
import Footer from '../components/Footer';


const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-blue-800">
      <Navbar currentPage="home" />
      <Welcome />
      <Desc />
      <Articlebento />
      <How />
      <Footer />
    </div>
  );
};

export default Homepage;