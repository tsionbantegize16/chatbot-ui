import React, { useState } from 'react';
import NavItem from './Sidebar/NavItem';
import RecentChat from './Sidebar/RecentChat';
import UpgradeToPro from './UpgradeToPro'; // Import the UpgradeToPro component

function Sidebar() {
  const initialNavItems = [
    { text: 'New Insights', icon: '✨', active: true },
    { text: 'Explore', icon: '🔍' },
    { text: 'Insights', icon: '📊' },
    { text: 'My Feed', icon: '📰' },
  ];

  const moreNavItems = [
    { text: 'Connections', icon: '🔗' },
    { text: 'Tracking metrics', icon: '📈' },
    { text: 'Use cases', icon: '💡' },
    { text: 'Help', icon: '❓' },
    { text: 'Settings', icon: '⚙️' },
  ];

  const initialChatsToShow = 3;
  const allRecentChats = [
    "Write a persuasive email to convince pole...",
    "Write a persuasive email to convince pole...",
    "Analyze user engagement metrics for Q3 2024",
    "Generate a report on customer churn in the last month",
    "Summarize the latest marketing campaign performance",
    "Write a persuasive email to convince pole...",
    "Suggest improvements for website loading speed",
  ];

  const [showMoreNavItems, setShowMoreNavItems] = useState(false);
  const [showMoreChats, setShowMoreChats] = useState(false);

  const displayedNavItems = showMoreNavItems
    ? [...initialNavItems, ...moreNavItems]
    : initialNavItems;

  const displayedChats = showMoreChats
    ? allRecentChats
    : allRecentChats.slice(0, initialChatsToShow);

  const handleToggleNavItems = () => {
    setShowMoreNavItems(!showMoreNavItems);
  };

  const handleToggleChats = () => {
    setShowMoreChats(!showMoreChats);
  };

  return (
    <div className="bg-coopBlue text-white w-64 flex flex-col h-screen p-6 shadow-md">
      <div className="mb-8 flex items-center justify-center">
        <h1 className="text-xl font-bold tracking-wider">Analytics Model</h1>
      </div>
      <nav className="mb-6">
        <ul>
          {displayedNavItems.map((item) => (
            <NavItem key={item.text} text={item.text} icon={item.icon} active={item.active} />
          ))}
        </ul>
        {moreNavItems.length > 0 && (
          <button
            className="text-sm text-gray-300 hover:text-white focus:outline-none mt-1"
            onClick={handleToggleNavItems}
          >
            {showMoreNavItems ? 'See Less' : 'See More'}
          </button>
        )}
      </nav>
      <div className="flex-grow">
        <h2 className="text-sm font-semibold text-gray-200 mb-3 uppercase tracking-wider">Recent chats</h2>
        <ul className="space-y-2 mb-2">
          {displayedChats.map((chat, index) => (
            <RecentChat key={index} text={chat} />
          ))}
        </ul>
        {allRecentChats.length > initialChatsToShow && (
          <button
            className="text-sm text-gray-300 hover:text-white focus:outline-none"
            onClick={handleToggleChats}
          >
            {showMoreChats ? 'See Less' : 'See More'}
          </button>
        )}
      </div>
      <div className="mt-auto">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 rounded-full bg-white text-coopBlue font-semibold flex items-center justify-center">LP</div>
          <span className="ml-3 text-sm font-medium">Logan Paul</span>
        </div>
        <UpgradeToPro />
      </div>
    </div>
  );
}

export default Sidebar;