// GoodTips.jsx
import React from 'react';
import TipsList from './Tipslist';

const articles = [
  {
    id: 2,
    title: "Create a Sleep Routine",
    description: "Going to bed and waking up at the same time daily helps regulate your internal body clock for better sleep quality.",
    author: "Dr. Iqbal Ramadhan",
    image: "https://images.squarespace-cdn.com/content/v1/656f4e4dababbd7c042c4946/03bca94a-90fc-4672-92fb-ceeee11cde3f/Bedtime+routine+for+adults3x2.jpg",
    link: "/article/2",
    category: "good"
  },
  {
    id: 4,
    title: "Exercise Regularly",
    description: "Regular physical activity can help you fall asleep faster and enjoy deeper sleep.",
    author: "Dr. Surya Wijaya",
    image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=400&h=300&fit=crop",
    link: "/article/4",
    category: "good"
  },
  {
    id: 7,
    title: "Practice Relaxation Techniques",
    description: "Meditation, deep breathing, or light yoga before bed can calm your mind and body for restful sleep.",
    author: "Dr. Sari Utami",
    image: "https://www.betterup.com/hubfs/man-in-yoga-pose-with-hands-clasped.jpg",
    link: "/article/7",
    category: "good"
  }
];

const GoodTips = () => {
  return <TipsList articles={articles} filterCategory="good" />;
};

export default GoodTips;
