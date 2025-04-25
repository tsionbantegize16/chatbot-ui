import React from 'react';
import InsightCard from './InsightCard';

function QuickInsights() {
  const insights = [
    {
      id: 1,
      question: 'How does the distribution of revenue total vary based on the gender of customers?',
      description: 'Analyze revenue patterns across different customer genders to identify key demographics.',
      icon: 'bi bi-gender-ambiguous', // Example Bootstrap Icon
      color: 'bg-gradient-to-br from-indigo-500 to-purple-500',
    },
    {
      id: 2,
      question: 'What is the average time spent on the website for customers who made purchases using Credit Cards?',
      description: 'Understand user engagement and behavior for customers using credit cards for transactions.',
      icon: 'bi bi-credit-card-fill', // Example Bootstrap Icon
      color: 'bg-gradient-to-br from-green-400 to-teal-400',
    },
    // Add more insights here
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {insights.map(({ id, ...insight }) => (
        <InsightCard key={id} {...insight} />
      ))}
    </div>
  );
}

export default QuickInsights;