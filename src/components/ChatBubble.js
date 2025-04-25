import React from 'react';

function ChatBubble({ text, isUser }) {
  return (
    <div
      className={`mb-2 rounded-lg py-2 px-3 ${
        isUser ? 'bg-blue-100 text-blue-800 self-end' : 'bg-gray-200 text-gray-800 self-start'
      } max-w-xs break-words`}
    >
      {text}
    </div>
  );
}

export default ChatBubble;