import React from "react";

const Sidebar = () => {
  return (
    <div className="my-5">
      <div className="p-4 text-left hover:bg-sky-200 font-medium hover:cursor-pointer text-white hover:text-black hover:font-bold">
        <button className="text-base mx-8">
          <i class="fas fa-home-alt"></i> &nbsp;&nbsp; Dashboard
        </button>
      </div>
      <div className="p-4 text-left hover:bg-sky-200 font-medium hover:cursor-pointer text-white hover:text-black hover:font-bold">
        <button className="text-base mx-8">
          <i class="fa-solid fa-cent-sign"></i> &nbsp;&nbsp; All Currency
        </button>
      </div>
      {/* <div className="p-4 text-left hover:bg-sky-200 hover:cursor-pointer text-white hover:text-black">
        <button className="text-base mx-8  font-medium">
          <i class="fas fa-home-alt"></i> &nbsp;&nbsp; 
        </button>
      </div>
      <div className="p-4 text-left hover:bg-sky-200 hover:cursor-pointer text-white hover:text-black">
        <button className="text-base mx-8  font-medium">
          <i class="fas fa-home-alt"></i> &nbsp;&nbsp; Dashboard
        </button>
      </div> */}
    </div>
  );
};

export default Sidebar;
