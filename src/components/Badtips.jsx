// BadTips.jsx
import React from 'react';
import TipsList from './Tipslist'; // Make sure the import matches the actual filename

const articles = [
  {
    id: 3,
    title: "Limit Caffeine in the Evening",
    description: "Avoid coffee, tea, or energy drinks after 4 PM to prevent interference with your sleep cycle.",
    author: "Dr. Maya Kusumo",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=400&h=300&fit=crop",
    link: "/article/3",
    category: "poor"
  },
  {
    id: 5,
    title: "Avoid Heavy Meals Before Bed",
    description: "Eating heavy or spicy food before bed can cause indigestion and interfere with sleep quality.",
    author: "Dr. Citra Manik",
    image: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=400&h=300&fit=crop",
    link: "/article/5",
    category: "poor"
  },
  {
    id: 8,
    title: "Reduce Alcohol Consumption",
    description: "Alcohol may make you sleepy, but it disrupts sleep stages and lowers overall sleep quality.",
    author: "Dr. Aditya Mahendra",
    image: "https://cdn.aarp.net/content/dam/aarpe/en/home/health/healthy-living/how-to-cut-back-on-drinking/_jcr_content/root/container_main/container_body_main/container_body1/container_body_cf/container_image/articlecontentfragment/cfimage.coreimg.50.932.jpeg/content/dam/aarp/health/healthy-living/2020/01/1140-hand-stopping-drink.jpg",
    link: "/article/8",
    category: "poor"
  },
  {
    id: 9,
    title: "Create a Consistent Sleep Schedule",
    description: "Going to bed and waking up at the same time every day helps regulate your body's internal clock.",
    author: "Dr. Sarah Johnson",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&h=300&fit=crop",
    link: "/article/9",
    category: "poor"
  },
  {
    id: 10,
    title: "Optimize Your Bedroom Environment",
    description: "Keep your bedroom cool, dark, and quiet. Consider blackout curtains and white noise machines.",
    author: "Dr. Michael Chen",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    link: "/article/10",
    category: "poor"
  },
  {
    id: 11,
    title: "Establish a Relaxing Bedtime Routine",
    description: "Develop calming pre-sleep activities like reading, gentle stretching, or meditation to signal your body it's time to wind down.",
    author: "Dr. Lisa Martinez",
    image: "https://images.unsplash.com/photo-1544376664-80b17f09d399?w=400&h=300&fit=crop",
    link: "/article/11",
    category: "poor"
  }
];

const BadTips = () => {
  return <TipsList articles={articles} filterCategory="poor"/>
};

export default BadTips;