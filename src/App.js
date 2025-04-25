import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import ChatBubble from './components/ChatBubble'; // Make sure this exists

function App() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (userMessage) => {
    // Add the user's message to the chat
    setMessages([...messages, { text: userMessage, isUser: true }]);

    // Simulate a bot response (replace with actual backend logic later)
    setTimeout(() => {
      const botResponse = `Bot says: "${userMessage}" received!`;
      setMessages([...messages, { text: userMessage, isUser: true }, { text: botResponse, isUser: false }]);
    }, 1000); // Simulate a 1-second delay
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-y-auto">
        <header className="bg-white shadow h-16 flex items-center justify-end p-4 border-b border-gray-200">
          {/* ... header content ... */}
        </header>
        <div className="flex-1 p-8 flex flex-col">
          <div className="flex-grow overflow-y-auto mb-4">
            {messages.map((msg, index) => (
              <ChatBubble key={index} text={msg.text} isUser={msg.isUser} />
            ))}
          </div>
          <MainContent onSendMessage={handleSendMessage} /> {/* Pass the send function */}
        </div>
      </div>
    </div>
  );
}

export default App;