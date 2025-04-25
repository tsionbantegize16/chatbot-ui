import React, { useState } from 'react';

function ChatInterface({ onSendMessage }) {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSend = () => {
    if (inputText.trim()) {
      onSendMessage(inputText); // Send the message to App.js
      setInputText('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="bg-white rounded-md shadow-md p-6">
      <div className="flex items-center">
        <span className="text-coopOrange text-xl mr-3">✨</span>
        <input
          type="text"
          className="flex-1 border rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-coopBlue focus:border-coopBlue"
          placeholder="Type your message..."
          value={inputText}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <div className="ml-4 flex items-center">
          <span className="text-gray-500 mr-3 text-sm">🔗 Connections</span>
          <button
            className="bg-coopBlue hover:bg-coopBlueHover text-white font-semibold py-3 px-6 rounded-md focus:outline-none focus:ring-coopBlue focus:ring-offset-2 transition duration-200"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatInterface;