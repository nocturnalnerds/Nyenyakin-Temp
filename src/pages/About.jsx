import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Queslist from '../components/Queslist';


const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-blue-800">
      <Navbar currentPage="about" />
      <Queslist />
      <Footer />
    </div>
  );
};

export default About;
