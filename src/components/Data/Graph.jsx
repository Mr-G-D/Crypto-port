import { fetchHistory } from "components/Api";
import React, { useEffect } from "react";

const Graph = (props) => {
  useEffect(() => {
    const fetch = async () => {
      const res = await fetchHistory(props.id);
      console.log(res);
    };
    fetch();
  }, [props.id]);
  return (
    <div id="graph" className="m-4 px-4">
      <div className="rounded-xl bg-white"></div>
    </div>
  );
};

export default Graph;
