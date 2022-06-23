import React, { useEffect, useState } from "react";
import Block from "./Block";
import { fetchCurrency } from "components/Api";

const Dashboard = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetch = async () => {
      const res = await fetchCurrency();
      setData(res);
    };
    fetch();
  }, []);

  return (
    <div className="">
      <div className="flex flex-wrap m-4" id="Favorites">
        {data ? (
          data.map((ele) => {
            return (
              <Block
                key={ele?.id}
                id={ele?.id}
                name={ele?.name}
                src={ele?.image?.small}
                low={ele?.market_data?.low_24h?.usd}
                high={ele?.market_data?.high_24h?.usd}
              />
            );
          })
        ) : (
          <div className="p-4 lg:w-1/4 md:w-1/3 animate-pulse">
            <div className="flex rounded-lg h-full bg-white p-8 flex-col shadow-md">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-black text-white flex-shrink-0"></div>
                <h2 className="text-gray-900  text-lg title-font font-medium">
                  Loading...
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-left text-base">
                  loading...&nbsp;
                  <i className="fa-solid fa-arrow-right-long"></i> &nbsp;
                  Loading...
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
