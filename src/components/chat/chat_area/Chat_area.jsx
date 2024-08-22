import React from 'react';

export default function Chat_area() {
  return (
    <div >Chat_area
      <div className='absolute bottom-0  w-full bg-base-200 p-4 border-8'><div className="flex items-center space-x-4">
      <input
        type="text"
        placeholder="Type your message..."
        className="input input-bordered w-full"
      />
      <button className="btn btn-primary">Send</button>
    </div></div>
    </div>
  );
}
