import { fetchHistory } from "components/Api";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const Graph = (props) => {
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
    <div id="graph" className="m-4 px-4">
      <div className="rounded-xl bg-white">
        <Line
          datasetIdKey="id"
          data={{
            labels: data,
            datasets: [
              {
                id: 1,
                borderColor: "red",
                label: "",
                data: price,
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default Graph;
