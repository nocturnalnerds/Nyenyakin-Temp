import React from 'react';
import { useNavigate } from 'react-router-dom';

const GoodResult = () => {
  const navigate = useNavigate();

  const handleExploreArticles = () => {
    // Navigate to good articles page
    navigate('/tips');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center py-8 px-4">
        <div className="w-full max-w-4xl">
          {/* Result Header */}
          <div className="text-center mb-8">
            <h2 className="text-white text-xl mb-4">Your Result:</h2>
            <h1 className="text-yellow-400 text-4xl md:text-5xl font-bold mb-6">
              Bad Sleep Quality
            </h1>
            <p className="text-white text-lg max-w-3xl mx-auto leading-relaxed">
              Your sleep may need some attention. Based on your answers, your recent sleep patterns show signs of disruption or insufficient rest.
            </p>
          </div>

          {/* What this means section */}
          <div className="bg-slate-600/30 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-3xl mx-auto">
            <h3 className="text-white text-xl font-semibold mb-6">What this means:</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-white">
                <span className="text-yellow-400 mr-3 text-xl">•</span>
                <span className="leading-relaxed">
                  You might be experiencing trouble falling or staying asleep.
                </span>
              </li>
              <li className="flex items-start text-white">
                <span className="text-yellow-400 mr-3 text-xl">•</span>
                <span className="leading-relaxed">
                  Daytime fatigue, irritability, or focus issues may be present.
                </span>
              </li>
              <li className="flex items-start text-white">
                <span className="text-yellow-400 mr-3 text-xl">•</span>
                <span className="leading-relaxed">
                  The good news? Sleep is fixable with the right strategies.
                </span>
              </li>
            </ul>
          </div>

          {/* Recommended Articles section */}
          <div className="text-center">
            <h3 className="text-white text-xl font-semibold mb-6">
              Recommended Articles for You:
            </h3>
            <button
              onClick={handleExploreArticles}
              className="group relative px-8 py-3 border-2 border-yellow-400 text-yellow-400 rounded-full font-medium text-lg transition-all duration-300 ease-in-out hover:bg-yellow-400 hover:text-slate-800 hover:shadow-lg hover:shadow-yellow-400/25 transform hover:scale-105"
            >
              <span className="relative z-10">
                Explore Articles for Bad Sleep Quality
              </span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GoodResult;