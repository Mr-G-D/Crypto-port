import { useParams } from "react-router-dom";
import Graph from "./Graph";

const Data = () => {
  const { id } = useParams();

  return (
    <div>
      <Graph id={id} />
    </div>
  );
};

export default Data;
