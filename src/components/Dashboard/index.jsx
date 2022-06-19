import React, { useEffect, useState } from "react";
import Block from "./Block";
import { fetchCurrency } from "components/Api";

const Dashboard = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetch = async () => {
      const res = await fetchCurrency();
      console.log(res[0]);
      setData(res);
    };
    fetch();
  }, []);

  return (
    <div className="">
      <div className="flex flex-wrap m-4" id="Favorites">
        {data?.map((ele) => {
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
    </div>
  );
};

export default Dashboard;
