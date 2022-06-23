import { Chart, registerables } from "chart.js";
import { fetchHistory } from "components/Api";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const Graph = (props) => {
  Chart.register(...registerables);

  const [data, setData] = useState([]);
  const [price, setPrice] = useState([]);

  useEffect(() => {
    setPrice([]);
    setData([]);
    const fetch = async () => {
      const res = await fetchHistory(props.id);
      res.prices.forEach((ele) => {
        setPrice((price) => [...price, ele[1]]);
        const date = new Date(ele[0]);
        setData((data) => [...data, dayjs(date).format("DD/MMM")]);
      });
    };
    fetch();
  }, [props.id]);

  return (
    <div className="lg:w-full md:w-9/12 sm:3/12">
      <Line
        datasetIdKey="id"
        data={{
          labels: data,
          datasets: [
            {
              id: 1,
              borderColor: "red",
              label: "Market Value (USD)",
              data: price,
            },
          ],
        }}
      />
    </div>
  );
};

export default Graph;
