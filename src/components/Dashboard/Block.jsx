import React from "react";

const Block = () => {
  return (
    <div className="p-4 lg:w-1/4 md:w-1/3">
      <div className="flex rounded-lg h-full bg-white p-8 flex-col shadow-md">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0"></div>
          <h2 className="text-gray-900 text-lg title-font font-medium">
            Shooting Stars
          </h2>
        </div>
        <div className="flex-grow">
          <p className="leading-relaxed text-left text-base">
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan
            taxidermy. Gastropub indxgo juice poutine.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Block;
