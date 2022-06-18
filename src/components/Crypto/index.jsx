import { fetchCurrency } from "../Api";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

let count = 1;
const Index = () => {
  const [row, setRow] = useState();

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchCurrency();
      // console.log(data);
      setRow(data);
    };
    fetch();
  }, []);

  const columns = [
    { name: "ID", selector: () => count++, maxWidth: "70px" },
    {
      name: "Symbol",
      selector: (row) => {
        return <img src={row.image.thumb} alt="icon" />;
      },
      maxWidth: "90px",
    },
    { name: "Name", selector: (row) => row.name, maxWidth: "120px" },
    {
      name: "US Dollars",
      selector: (row) => row?.market_data?.current_price?.usd,
    },
  ];
  return (
    <div>
      <DataTable sortServer columns={columns} data={row} pagination />
    </div>
  );
};

export default Index;
