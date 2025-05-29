import React, { useState } from 'react';

const TipsHomepage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [visibleArticles, setVisibleArticles] = useState(6);

const articles = [
  {
    id: 1,
    title: "Reasons You Should Avoid Screens Before Bedtime",
    description: "Blue light from phones and computers can disrupt melatonin production. Avoid screens at least 1 hour before bedtime.",
    author: "WebMD",
    image: "https://www.sleepmattersperth.com.au/wp-content/uploads/SEE-screens-before-bed.jpeg",
    link: "https://www.webmd.com/eye-health/video/video-eyes-screens-bed",
    category: "all"
  },
  {
    id: 2,
    title: "Create a Sleep Routine",
    description: "Going to bed and waking up at the same time daily helps regulate your internal body clock for better sleep quality.",
    author: "CAO Office",
    image: "https://images.squarespace-cdn.com/content/v1/656f4e4dababbd7c042c4946/03bca94a-90fc-4672-92fb-ceeee11cde3f/Bedtime+routine+for+adults3x2.jpg",
    link: "https://hr.wustl.edu/creating-a-sleep-routine-6-steps-to-better-sleep/",
    category: "good"
  },
  {
    id: 3,
    title: "Caffeine and Sleep Problems",
    description: "Avoid coffee, tea, or energy drinks after 4 PM to prevent interference with your sleep cycle.",
    author: "Danielle Pacheco",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=400&h=300&fit=crop",
    link: "https://www.sleepfoundation.org/nutrition/caffeine-and-sleep",
    category: "poor"
  },
  {
    id: 4,
    title: "Exercising for Better Sleep",
    description: "Regular physical activity can help you fall asleep faster and enjoy deeper sleep.",
    author: "Johns Hopkinds Medicine",
    image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=400&h=300&fit=crop",
    link: "https://www.hopkinsmedicine.org/health/wellness-and-prevention/exercising-for-better-sleep",
    category: "good"
  },
  {
    id: 5,
    title: "Does eating before bed affect your sleep?",
    description: "Eating heavy or spicy food before bed can cause indigestion and interfere with sleep quality.",
    author: "Dr. Chris Mosunic, PhD, RD, MBA",
    image: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=400&h=300&fit=crop",
    link: "https://www.calm.com/blog/eating-before-bed",
    category: "poor"
  },
  {
    id: 6,
    title: "How To Cool Down a Room At Night For Your Best Sleep",
    description: "A comfortable sleep environment with low light and cool temperature promotes better rest.",
    author: "Jessica Timmons",
    image: "https://www.nestbedding.com/cdn/shop/articles/dark_bedroom_at_night_10806ccc-8468-4fd1-928b-3158322b8a8e_2310x.jpg?v=1574245656",
    link: "https://sleepopolis.com/education/cool-bedroom-great-sleep/",
    category: "all"
  },
  {
    id: 7,
    title: "Practice Relaxation Techniques",
    description: "Meditation, deep breathing, or light yoga before bed can calm your mind and body for restful sleep.",
    author: "Dr. Sari Utami",
    image: "https://www.betterup.com/hubfs/man-in-yoga-pose-with-hands-clasped.jpg",
    link: "/article/7",
    category: "good"
  },
  {
    id: 8,
    title: "Alcohol and Sleep",
    description: "Alcohol may make you sleepy, but it disrupts sleep stages and lowers overall sleep quality.",
    author: "Lucy Bryan",
    image: "https://cdn.aarp.net/content/dam/aarpe/en/home/health/healthy-living/how-to-cut-back-on-drinking/_jcr_content/root/container_main/container_body_main/container_body1/container_body_cf/container_image/articlecontentfragment/cfimage.coreimg.50.932.jpeg/content/dam/aarp/health/healthy-living/2020/01/1140-hand-stopping-drink.jpg",
    link: "https://www.sleepfoundation.org/nutrition/alcohol-and-sleep#:~:text=Experts%20recommend%20avoiding%20alcohol%20at,and%20overall%20low%2Dquality%20sleep.",
    category: "poor"
  },
  {
    id: 9,
    title: "Keeping a Sleep Diary",
    description: "Track your sleep patterns and habits to identify issues and improve your sleep over time.",
    author: "Stephanie Watson",
    image: "https://journey.cloud/content_assets/journal/closeup-hands-writing-journal.jpg",
    link: "https://www.webmd.com/sleep-disorders/how-to-use-a-sleep-diary",
    category: "all"
  }
];


  // Filter articles based on selected category
  const filteredArticles = selectedFilter === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedFilter);

  // Get visible articles
  const displayedArticles = filteredArticles.slice(0, visibleArticles);

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
    setVisibleArticles(6); // Reset to show first 6 when filter changes
  };

  const handleSeeMore = () => {
    setVisibleArticles(prev => prev + 6);
  };

  return (
    <section className="px-6 py-16">
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => handleFilterClick('all')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedFilter === 'all'
                ? 'bg-yellow-400 text-gray-800'
                : 'bg-gray-600 text-white hover:bg-gray-500'
            }`}
          >
            View All Sleep Tips
          </button>
          <button
            onClick={() => handleFilterClick('good')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedFilter === 'good'
                ? 'bg-yellow-400 text-gray-800'
                : 'bg-gray-600 text-white hover:bg-gray-500'
            }`}
          >
            For Good Sleep Results
          </button>
          <button
            onClick={() => handleFilterClick('poor')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedFilter === 'poor'
                ? 'bg-yellow-400 text-gray-800'
                : 'bg-gray-600 text-white hover:bg-gray-500'
            }`}
          >
            For Poor Sleep Results
          </button>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedArticles.map((article) => (
            <a
              key={article.id}
              href={article.link}
              className="group block bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.description}
                </p>
                <p className="text-xs text-gray-500">
                  Author: {article.author}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* See More Button */}
        {visibleArticles < filteredArticles.length && (
          <div className="flex justify-center">
            <button
              onClick={handleSeeMore}
              className="bg-blue-500 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-600 transition-all duration-300 hover:shadow-lg"
            >
              See more
            </button>
          </div>
        )}

        {/* No articles message */}
        {filteredArticles.length === 0 && (
          <div className="text-center text-white py-12">
            <p className="text-xl">No articles found for this category.</p>
          </div>
        )}
      </div>
    </div>
    </section>
  );
};

export default TipsHomepage;