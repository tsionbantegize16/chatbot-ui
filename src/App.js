import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import ChatBubble from './components/ChatBubble'; // Make sure this exists

function App() {
  const [messages, setMessages] = useState([]);

  const predefinedResponses = {
    hello: 'Hello!',
    hi: 'Hi there!',
    hey: 'Hey!',
    'how are you?': "I'm good, what about you?",
    'how are you doing?': "I'm doing well, thank you for asking!",
    'what\'s up?': 'Not much, just here to help!',
    'what is up?': 'Same as above!', // Adding a slight variation
    'how is your day?': "My day is going well, thank you for asking!",
    'how\'s your day?': "It's going great!",
    thanks: "You're welcome!",
    'thank you': "You're very welcome!",
    bye: 'Goodbye!',
    goodbye: 'Have a great day!',
    'see you later': 'See you!',
    'talk to you later': 'Okay, talk to you later!',
    'what can you do?': "I can answer simple questions and provide information.",
    'tell me a joke': "Why don't scientists trust atoms? Because they make up everything!",
  };

  const handleSendMessage = (userMessage) => {
    setMessages([...messages, { text: userMessage, isUser: true }]);

    const lowerCaseMessage = userMessage.toLowerCase().trim(); // Trim whitespace and convert to lowercase

    if (predefinedResponses.hasOwnProperty(lowerCaseMessage)) {
      setTimeout(() => {
        setMessages([...messages, { text: userMessage, isUser: true }, { text: predefinedResponses[lowerCaseMessage], isUser: false }]);
      }, 500); // Slight delay for bot response
    } else {
      setTimeout(() => {
        setMessages([...messages, { text: userMessage, isUser: true }, { text: "Sorry, I don't understand that yet.", isUser: false }]);
      }, 500);
    }
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