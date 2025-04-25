import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Optional Top Navigation */}
        <header className="bg-white shadow h-16 flex items-center justify-end p-4 border-b border-gray-200">
          <div className="flex items-center">
            <button className="bg-coopBlue hover:bg-coopBlueHover text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-coopBlue focus:ring-offset-2 transition duration-200">
              👤 Logan Paul
            </button>
            {/* Add other top navigation elements here */}
          </div>
        </header>
        <MainContent />
      </div>
    </div>
  );
}

export default App;