import React from 'react';

function RecentChat({ text }) {
  return (
    <li className="hover:bg-coopBlueHover rounded-md bg-opacity-20">
      <a href="#" className="block p-2 text-sm text-gray-100 truncate">{text}</a>
    </li>
  );
}

export default RecentChat;