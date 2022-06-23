import { useParams } from "react-router-dom";
import Graph from "./Graph";
import Info from "./Info";

const Data = () => {
  const { id } = useParams();

  return (
    <div>
      <div id="class" className="rounded-xl bg-white mx-4 my-2 p-4">
        <Info id={id} />
      </div>
      <div id="graph" className="rounded-xl bg-white mx-4 my-2 p-4">
        <Graph id={id} />
      </div>
    </div>
  );
};

export default Data;
