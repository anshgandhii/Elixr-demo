// src/components/chat/Messages.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import Message from '../message/Message';

const Messages = () => {
  const messages = useSelector((state) => state.chat.messages);

  return (
    <div className="flex-1 p-4 overflow-y-auto space-y-4">
      {messages.map((message, index) => (
        <Message key={index} content={message.content} sender={message.sender} />
      ))}
    </div>
  );
};

export default Messages;
