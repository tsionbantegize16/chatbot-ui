import React from 'react';
import Greeting from './MainContent/Greeting'; // Corrected import path
import QuickInsights from './MainContent/QuickInsights'; // Corrected import path
import ChatInterface from './MainContent/ChatInterface'; // Corrected import path

function MainContent({ onSendMessage }) {
  return (
    <div className="flex-1 bg-gray-100 p-8 overflow-y-auto">
      <Greeting name="Logan" />
      <QuickInsights />
      <ChatInterface onSendMessage={onSendMessage} /> {/* Pass the function down */}
    </div>
  );
}

export default MainContent;