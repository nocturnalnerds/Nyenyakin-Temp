import React from 'react';
import { useNavigate } from 'react-router-dom';



const GoodResult = () => {
  const navigate = useNavigate();

  const handleExploreArticles = () => {
    navigate('/tips'); // Navigasi ke halaman artikel "Good"
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#253A57]">
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-4xl space-y-10">

          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-white text-xl">Your Result:</h2>
            <h1 className="text-yellow-400 text-4xl md:text-5xl font-bold">
              Good Sleep Quality
            </h1>
            <p className="text-white text-lg leading-relaxed max-w-2xl mx-auto">
              Great job! Your sleep patterns over the past month suggest that you're getting healthy, restful sleep.
            </p>
          </div>

          {/* What This Means */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mx-auto max-w-3xl shadow-inner">
            <h3 className="text-white text-xl font-semibold mb-6">What this means:</h3>
            <ul className="space-y-4 text-white">
              {[
                "Your sleep duration, depth, and regularity are within a healthy range.",
                "You're likely functioning well during the day without excessive fatigue.",
                "Minor improvements may still help optimize your rest."
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-yellow-400 mr-3 text-xl">•</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Articles Button */}
          <div className="text-center">
            <h3 className="text-white text-xl font-semibold mb-6">
              Recommended Articles for You:
            </h3>
            <button
              onClick={handleExploreArticles}
              className="group relative px-8 py-3 border-2 border-yellow-400 text-yellow-400 rounded-full font-semibold text-lg transition-all duration-300 ease-in-out hover:bg-yellow-400 hover:text-[#253A57] hover:shadow-lg hover:scale-105"
            >
              <span className="relative z-10">
                Explore Articles for Good Sleep Quality
              </span>
            </button>
          </div>
          
        </div>
      </main>
    </div>
  );
};

export default GoodResult;
