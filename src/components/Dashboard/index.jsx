import React from "react";
import Block from "./Block";

const Dashboard = () => {
  return (
    <div className="">
      <div className="flex flex-wrap m-4" id="Favorites">
        <Block />
        <Block />
        <Block />
        <Block />
      </div>
      <div id="graph" className="m-4 px-4">
        <div className="rounded-md bg-white">Hello</div>
      </div>
    </div>
  );
};

export default Dashboard;
