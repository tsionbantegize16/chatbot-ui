import React from 'react';

function InsightCard({ question, description, icon, color }) {
  const bgColor = "#00adef"; // Using your coopBlue color

  return (
    <div
      className={`bg-white rounded-lg shadow-xl overflow-hidden transition-transform transform hover:scale-105 duration-300`}
      style={{ backgroundColor: bgColor }} // Applying the background color directly
    >
      <div className="px-6 py-5 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          {icon && <i className={`${icon} text-2xl text-white bg-opacity-80 rounded-full p-2 mr-3`}></i>}
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#E38524] text-white  text-white-300">
  Quick Insight
</span>
        </div>
        <h3 className="text-lg leading-6 font-medium text-white">
          {question}
        </h3>
        {description && (
          <p className="mt-2 text-sm text-gray-200">
            {description}
          </p>
        )}
        <div className="mt-4">
        <button
  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#E38524] hover:bg-[#00adef] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E38524]  dark:text-orange-300 "
  style={{ color: "white" }} // Ensuring text is white
>
  Analyze
  <svg className="-mr-1 ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
</button>
        </div>
      </div>
    </div>
  );
}

export default InsightCard;