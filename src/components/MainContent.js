import React from 'react';
import Greeting from './MainContent/Greeting';
import QuickInsights from './MainContent/QuickInsights';
import ChatInterface from './MainContent/ChatInterface';

function MainContent() {
  return (
    <div className="flex-1 bg-gray-100 p-8 overflow-y-auto">
      <Greeting name="Logan" />
      <QuickInsights />
      <ChatInterface />
    </div>
  );
}

export default MainContent;