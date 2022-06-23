import { fetchData } from "components/Api";
import React, { useEffect, useState } from "react";

const Info = (props) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetch = async () => {
      const res = await fetchData(props.id);
      //   console.log(res);
      setData(res);
    };
    fetch();
  }, [props.id]);

  return (
    <div className="container p-4 mx-auto flex flex-col lg:w-full md:w-9/12 sm:3/12">
      <div className="lg:w-4/6 mx-auto">
        <div className="flex flex-col sm:flex-row mt-10">
          <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
              {data ? (
                <img src={data?.image?.large} alt="Icon" />
              ) : (
                "Loading ..."
              )}
            </div>
            <div className="flex flex-col items-center text-center justify-center">
              <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                {data ? data.name : "Loading..."}
              </h2>
              <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
              <div className="grid gap-4">
                <div className="text-base flex justify-between">
                  <p className="font-semibold mr-1">Rank :</p>{" "}
                  {data ? data?.market_cap_rank : "Loading..."}
                </div>
                <div className="text-base flex justify-between">
                  <p className="font-semibold mr-1 ">Current Price :</p>{" "}
                  {data
                    ? "$" + data?.market_data?.current_price?.usd
                    : "Loading..."}
                </div>
                <div className="text-base flex justify-between">
                  <p className="font-semibold mr-1 ">Total Volume :</p>{" "}
                  {data
                    ? "$" + data?.market_data?.total_volume?.usd
                    : "Loading..."}
                </div>
              </div>
            </div>
          </div>
          <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
            <p
              dangerouslySetInnerHTML={{
                __html: data
                  ? data?.description?.en.slice(0, 999)
                  : "Loading...",
              }}
              className="leading-relaxed text-lg mb-4"
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
