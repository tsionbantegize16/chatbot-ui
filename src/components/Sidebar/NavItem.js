import React from 'react';

function NavItem({ text, icon, active }) {
  return (
    <li className={`mb-0.5 ${active ? 'bg-coopBlueHover rounded-md' : 'hover:bg-coopBlueHover rounded-md bg-opacity-20'}`}> {/* Reduced vertical margin */}
      <a href="#" className="block p-2.5 flex items-center text-sm font-medium"> {/* Reduced padding */}
        <span className="mr-2 text-lg">{icon}</span> {/* Reduced horizontal margin */}
        <span>{text}</span>
      </a>
    </li>
  );
}

export default NavItem;