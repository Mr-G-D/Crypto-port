import React, { useEffect, useState } from "react";
import Block from "./Block";
import Crypto from "components/Crypto";
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

  let content = [];
  if (data) {
    for (let i = 0; i < 4; i++) {
      content.push(data[i]);
    }
  }

  return (
    <div className="">
      <div className="flex flex-wrap m-4" id="Favorites">
        {content.map((ele) => {
          return (
            <Block
              key={ele.id}
              name={ele?.name}
              src={ele?.image?.small}
              low={ele?.market_data?.low_24h?.usd}
              high={ele?.market_data?.high_24h?.usd}
            />
          );
        })}
      </div>
      <div id="graph" className="m-4 px-4">
        <div className="rounded-xl bg-white">
          <Crypto />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
