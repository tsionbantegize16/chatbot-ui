import React from 'react';

function InsightCard({ question }) {
  return (
    <div className="bg-white rounded-md shadow-md p-6 hover:shadow-lg transition duration-200">
      <p className="text-gray-700 leading-relaxed">{question}</p>
      {/* You could add a subtle border or other visual cues */}
    </div>
  );
}

export default InsightCard;