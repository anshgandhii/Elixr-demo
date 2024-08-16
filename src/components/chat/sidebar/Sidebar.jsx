import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./Sidebar.css";
import Video_Area from '../video_area/Video_Area';
import Chat_area from "../chat_area/chat_area";

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
    <div className="container">
        <div class="sidebar " data-theme="synthwave">
        <a href="#home" className="m-4" data-theme="cyberpunk">Home </a>
        <a href="#services "className="m-4" data-theme="cyberpunk">Services</a>
        <a href="#about" className="m-4" data-theme="cyberpunk">About</a>
        <a href="#contact" className="m-4" data-theme="cyberpunk">Contact</a>
        </div>

        <div className="video" data-theme="synthwave">
          <Video_Area />
        </div>

        <div className="chat_area "data-theme="synthwave">
          <Chat_area />
        </div>
    </div>
  );
}
