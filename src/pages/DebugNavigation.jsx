// Create this as DebugNavigation.jsx to test your routes
import React from 'react';
import { useNavigate } from 'react-router-dom';

const DebugNavigation = () => {
  const navigate = useNavigate();

  const testNavigation = (path) => {
    console.log('Trying to navigate to:', path);
    navigate(path);
  };

  return (
    <div className="p-8 bg-white text-black">
      <h2 className="text-xl mb-4">Debug Navigation</h2>
      <div className="space-x-4">
        <button 
          onClick={() => testNavigation('/result/good')}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Test Good Result Page
        </button>
        <button 
          onClick={() => testNavigation('/result/bad')}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Test Bad Result Page
        </button>
        <button 
          onClick={() => testNavigation('/')}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default DebugNavigation;