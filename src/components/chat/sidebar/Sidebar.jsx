import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./Sidebar.css";
import Video_Area from '../video_area/Video_Area';
import Chat_area from "../chat_area/chat_area";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

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
    <div className="container" {...handlers}>
        <div className="sidebar">
          <a href="#home" className="m-4">Home</a>
          <a href="#services" className="m-4">Services</a>
          <a href="#about" className="m-4">About</a>
          <a href="#contact" className="m-4">Contact</a>
        </div>

        <div className="video">
          <Video_Area />
        </div>

        <div className="chat_area">
          <Chat_area />
        </div>
    </div>
  );
}
