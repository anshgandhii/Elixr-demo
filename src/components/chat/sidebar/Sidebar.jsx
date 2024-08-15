import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./Sidebar.css";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); // Sidebar is hidden initially

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => setIsOpen(false),
    onSwipedRight: () => setIsOpen(true),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="chat_area" data-theme="cupcake">
        <div class="sidebar " data-theme="retro">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        </div>

        <div class="content" data-theme="synthwave">
        <h1>Main Content Area</h1>
        <p>This is where your main content goes. The sidebar is fixed on the left and will stay visible while you scroll.</p>
        </div>
    </div>
  );
}
