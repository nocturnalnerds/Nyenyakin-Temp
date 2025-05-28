// AllTips.jsx
import React from 'react';
import TipsList from '/TipsList';

const articles = [
  {
    id: 1,
    title: "Avoid Screens Before Bed",
    description: "Blue light from phones and computers can disrupt melatonin production. Avoid screens at least 1 hour before bedtime.",
    author: "Dr. Lina Hartono",
    image: "https://www.sleepmattersperth.com.au/wp-content/uploads/SEE-screens-before-bed.jpeg",
    link: "/article/1",
    category: "all"
  },
  {
    id: 6,
    title: "Keep Your Bedroom Cool and Dark",
    description: "A comfortable sleep environment with low light and cool temperature promotes better rest.",
    author: "Dr. Bambang Darmawan",
    image: "https://www.nestbedding.com/cdn/shop/articles/dark_bedroom_at_night_10806ccc-8468-4fd1-928b-3158322b8a8e_2310x.jpg?v=1574245656",
    link: "/article/6",
    category: "all"
  },
  {
    id: 9,
    title: "Keep a Sleep Diary",
    description: "Track your sleep patterns and habits to identify issues and improve your sleep over time.",
    author: "Dr. Nina Alamsyah",
    image: "https://journey.cloud/content_assets/journal/closeup-hands-writing-journal.jpg",
    link: "/article/9",
    category: "all"
  }
];

const AllTips = () => {
  return <TipsList articles={articles} filterCategory="all" />;
};

export default AllTips;
