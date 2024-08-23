import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Messages = () => {
  const messages = useSelector((state) => state.chat.messages);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom when messages change
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [messages]);

  return (
    <div className="flex-1 p-4 overflow-y-auto space-y-4">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`chat ${message.sender === 'me' ? 'chat-end' : 'chat-start'}`}
        >
          <div
            className={`chat-bubble ${message.sender === 'me' ? 'bg-skyblue text-textWhite' : 'bg-white text-textBlack'}`}
          >
            {message.content}
          </div>
        </div>
      ))}
      {/* This div ensures the scrolling goes to the bottom */}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Messages;
