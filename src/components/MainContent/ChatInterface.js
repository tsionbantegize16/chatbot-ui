import React, { useState } from 'react';

function ChatInterface() {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim()) {
      console.log('User message:', inputText);
      // In a real application, send this to the backend
      setInputText('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="bg-white rounded-md shadow-md p-6">
      <div className="flex items-center">
        <span className="text-coopOrange text-xl mr-3">✨</span>
        <input
          type="text"
          className="flex-1 border rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-coopBlue focus:border-coopBlue"
          placeholder="Ask your data anything and receive the right insights within seconds..."
          value={inputText}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <div className="ml-4 flex items-center">
          <span className="text-gray-500 mr-3 text-sm">🔗 Connections</span>
          <button
            className="bg-coopBlue hover:bg-coopBlueHover text-white font-semibold py-3 px-6 rounded-md focus:outline-none focus:ring-coopBlue focus:ring-offset-2 transition duration-200"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatInterface;