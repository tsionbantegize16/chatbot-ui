import React from 'react';
import InsightCard from './InsightCard';

function QuickInsights() {
  const insights = [
    {
      question: 'How does the distribution Of revenue total vary based on the gender Of customers?',
    },
    {
      question: 'What is the average time spent on the website for customers who made purchases using Credit Cards?',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {insights.map((insight, index) => (
        <InsightCard key={index} question={insight.question} />
      ))}
    </div>
  );
}

export default QuickInsights;