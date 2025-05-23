import React, { useState } from 'react';

const Queslist = () => {
  const [questions, setQuestions] = useState([
    {
      question: 'What is PSQI?',
      answer: 'The Pittsburgh Sleep Quality Index (PSQI) is a self-reported questionnaire developed to evaluate an individual’s sleep quality and patterns over the past month. It measures different sleep dimensions through 19 individual items grouped into 7 components, producing a global score to distinguish between good and poor sleepers.',
      isOpen: false
    },
    {
      question: 'Why check sleep quality using PSQI?',
      answer: 'Unlike simply tracking how many hours someone sleeps, the PSQI assesses multiple factors like how long it takes to fall asleep, interruptions during sleep, sleep efficiency, and daytime tiredness. This makes it a more holistic and validated tool for identifying sleep problems, useful both in research and clinical settings.',
      isOpen: false
    },
    {
      question: 'Why is sleep quality important?',
      answer: 'Good sleep quality supports the body’s recovery, strengthens the immune system, enhances memory and concentration, regulates emotions, and maintains overall health. Poor sleep quality increases the risk of chronic diseases (e.g., heart disease, diabetes), mental health issues (e.g., depression, anxiety), reduced work productivity, and higher accident risks.',
      isOpen: false
    },
    {
      question: 'What factors affect sleep in urban areas?',
      answer: 'Urban environments often expose individuals to higher levels of noise pollution (traffic, nightlife), artificial light (street lamps, billboards), stressful work demands, longer commutes, irregular work hours (e.g., shift work), and crowded living spaces. These factors disrupt circadian rhythms and sleep continuity, making it harder for people to achieve restorative sleep.',
      isOpen: false
    },
    {
      question: 'Why predict sleep quality?',
      answer: 'Predicting sleep quality helps identify people at risk of sleep disorders or related health issues before they worsen. By using prediction tools, healthcare providers and policymakers can design targeted interventions, guide personalized recommendations for better sleep, and improve public health strategies in urban areas where sleep problems are prevalent.',
      isOpen: false
    },
    {
      question: 'How is PSQI scored?',
      answer: 'Each of the 7 components in PSQI is scored from 0 (no difficulty) to 3 (severe difficulty). These scores are summed to yield a global score from 0 to 21. A global score greater than 5 indicates poor sleep quality. The scoring helps quantify subjective sleep experiences into measurable outcomes that can be compared across individuals or populations.',
      isOpen: false
    },
    {
      question: 'What are the 7 components of PSQI?',
      answer: 'as',
      isOpen: false
    },
    {
      question: 'Who can use the PSQI?',
      answer: 'PSQI can be used by doctors, psychologists, researchers, and individuals. It’s widely applied in clinical settings to screen for sleep disorders, in research to study sleep patterns in different populations, and by individuals who want to track their sleep quality at home for self-awareness or monitoring purposes.',
      isOpen: false
    },
    {
      question: 'What makes PSQI different from other sleep measures?',
      answer: ' Unlike tools that measure only sleep duration or sleep onset latency, PSQI evaluates multiple interconnected dimensions of sleep and their impact on daily functioning. It also focuses on subjective experiences, capturing how sleep problems affect life quality, which objective measures (like actigraphy or polysomnography) may miss. Moreover, it’s easy to administer, cost-effective, and validated across many populations and settings.',
      isOpen: false
    }
  ]);

  const toggleQuestion = (index) => {
    const updated = questions.map((item, i) => {
      if (i === index) {
        return { ...item, isOpen: !item.isOpen };
      }
      return item;
    });
    setQuestions(updated);
  };

  return (
    <section className="px-6 py-16">
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h2 className="text-3xl font-bold text-yellow-300 text-center mb-8">
        About PSQI
      </h2>

      <div className="space-y-4">
        {questions.map((item, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden transition-all duration-300 bg-orange-100"
          >
            {!item.isOpen ? (
              <div
                className="p-4 flex justify-between items-center cursor-pointer"
                onClick={() => toggleQuestion(index)}
              >
                <h3 className="font-medium text-blue-900">{item.question}</h3>
                <span className="text-2xl">+</span>
              </div>
            ) : (
              <>
                <div
                  className="p-4 flex justify-between items-center cursor-pointer bg-[#0A1172]"
                  onClick={() => toggleQuestion(index)}
                >
                  <h3 className="font-medium text-white">
                    Question: {item.question}
                  </h3>
                  <span className="text-2xl text-white">-</span>
                </div>
                <div className="px-4 pb-4">
                  <p className="text-blue-900">Answer: {item.answer}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Queslist;
