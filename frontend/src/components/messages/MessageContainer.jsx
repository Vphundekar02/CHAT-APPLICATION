import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {

  const {selectedConversation, setSelectedConversation} = useConversation();

  useEffect( () => {
    // unmount, to clear the selected conversation when logged out
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="md:min-w-[750px] flex flex-col">
      {!selectedConversation ? <NoChatSelected/> : (
        <>
        {/* Header */}
        <div className="flex gap-2 items-center bg-sky-600 rounded p-2 py-1 cursor-pointer">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img
                src={selectedConversation.profilePic}
                alt="user avatar"
              />
            </div>
          </div>

          <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
              <p className="font-bold text-gray-200">{selectedConversation.fullName}</p>
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
  const { authUser} = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 { authUser.fullName} ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};
