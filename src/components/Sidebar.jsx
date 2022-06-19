import React from "react";

const Sidebar = () => {
  return (
    <div className="my-5">
      <div
        onClick={() => {
          window.location.href = "/";
        }}
        className="p-4 text-left hover:bg-sky-200 font-medium hover:cursor-pointer text-white hover:text-black hover:font-semibold"
      >
        <button className="text-base mx-8">
          <i className="fas fa-home-alt"></i> &nbsp;&nbsp; Dashboard
        </button>
      </div>
      <div
        onClick={() => {
          window.location.href = "/all";
        }}
        className="p-4 text-left hover:bg-sky-200 font-medium hover:cursor-pointer text-white hover:text-black hover:font-semibold"
      >
        <button className="text-base mx-8">
          <i className="fa-solid fa-cent-sign"></i> &nbsp;&nbsp; All Currency
        </button>
      </div>
      {/* <div className="p-4 text-left hover:bg-sky-200 hover:cursor-pointer text-white hover:text-black">
        <button className="text-base mx-8  font-medium">
          <i className="fas fa-home-alt"></i> &nbsp;&nbsp; 
        </button>
      </div>
      <div className="p-4 text-left hover:bg-sky-200 hover:cursor-pointer text-white hover:text-black">
        <button className="text-base mx-8  font-medium">
          <i className="fas fa-home-alt"></i> &nbsp;&nbsp; Dashboard
        </button>
      </div> */}
    </div>
  );
};

export default Sidebar;
