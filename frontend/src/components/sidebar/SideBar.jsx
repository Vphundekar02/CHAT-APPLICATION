import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

const SideBar = () => {
  return (
    <div className="border-r border-blue-500 p-4 flex flex-col">
      <SearchInput />
      <div className="divider divider-info px-3"></div>
      <Conversations />
      <LogoutButton/>
    </div>
  );
};

export default SideBar;
