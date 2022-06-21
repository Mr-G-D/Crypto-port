import React from "react";
import { Link } from "react-router-dom";

const Block = (props) => {
  return (
    <div className="p-4 lg:w-1/4 md:w-1/3">
      <Link to={"/" + props?.id}>
        <div className="flex rounded-lg h-full bg-white p-8 flex-col shadow-md">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full text-white flex-shrink-0">
              <img src={props?.src} alt={props?.name} />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              {props?.name}
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-left text-base">
              {props?.low} &nbsp;
              <i className="fa-solid fa-arrow-right-long"></i> &nbsp;
              {props?.high} &nbsp; (24h)
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Block;
