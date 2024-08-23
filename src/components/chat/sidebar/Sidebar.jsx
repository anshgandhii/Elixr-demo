import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from '../../../features/chat/ChatSlice';

const Sidebar = () => {
  const isOpen = useSelector((state) => state.chat.sidebarOpen);
  const dispatch = useDispatch();

  return (
    <div
      className={`fixed inset-0 bg-opacity-75 transition-opacity ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{ zIndex: 50 }}  // Ensures the overlay is above other elements
    >
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ zIndex: 60 }}  // Ensures the sidebar is above the overlay and other elements
      >
        <div className="p-4">
          <button
            className="p-2 rounded-full"
            onClick={() => dispatch(toggleSidebar())}
          >
            ✕
          </button>
          <h2 className="text-lg font-semibold mt-4">Sidebar</h2>
          {/* Add your sidebar content here */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
