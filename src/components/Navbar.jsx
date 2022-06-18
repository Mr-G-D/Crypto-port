import React from "react";

const Navbar = () => {
  return (
    <div className="bg-slate-700 h-14 flex justify-between">
      <div className="w-16 p-2">
        <img src="/images/dollar.png" alt="icon" />
      </div>
      <div className="p-2">
        <img
          className="rounded-full"
          src="https://i.pravatar.cc/45"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Navbar;
