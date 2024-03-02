import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import MessageContainer from "../../components/messages/MessageContainer";

const Home = () => {
    
  return (
    <div className="flex sm:h-[450px] md:h-[650px] rounded-lg overflow-hidden bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-70 border border-blue-300">
      <SideBar />
      <MessageContainer/>
    </div>
  );
};

export default Home;
