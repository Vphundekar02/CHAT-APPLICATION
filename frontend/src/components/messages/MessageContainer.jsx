import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {

    const noChatSelected = false;

  return (
    <div className="md:min-w-[750px] flex flex-col">
      {noChatSelected ? <NoChatSelected/> : (
        <>
        {/* Header */}
        <div className="flex gap-2 items-center bg-sky-600 rounded p-2 py-1 cursor-pointer">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="user avatar"
              />
            </div>
          </div>

          <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
              <p className="font-bold text-gray-200">User 001</p>
              {/* <span className="text-xl">🎃</span> */}
            </div>
          </div>
        </div>

        <Messages/>
        <MessageInput/>

        {/* <Messages />
 				<MessageInput /> */}
      </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 Vinay ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};
