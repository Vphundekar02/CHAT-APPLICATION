import React, { useState } from "react";
// import { BsSend } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";
import useSendMessage from "../../hooks/useSendMessages";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5  bg-gray-900 border-blue-300 text-white"
          placeholder="Send a message"
          value={message}
		onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3 text-info"
        >
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <IoIosSend />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;

