import React from "react";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-header"> 
      Anakin : 
      <time className="text-xs opacity-50">12:46</time>
      </div>
      <div className="chat-bubble">
        You underestimate my power!
      </div>
      
    </div>
  );
};

export default Message;
