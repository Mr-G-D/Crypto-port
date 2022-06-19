import { fetchCurrency } from "../Api";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

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
    {
      name: "Market Rank",
      selector: (row) => row?.market_data?.market_cap_rank,
    },
    { name: "Name", selector: (row) => row.name },
    {
      name: "Icon",
      selector: (row) => {
        return <img src={row.image.thumb} alt="icon" />;
      },
    },
    {
      name: "US Dollars",
      selector: (row) => `$${row?.market_data?.current_price?.usd}`,
      center: "true",
    },
    {
      name: "24h Price Change",
      selector: (row) => row?.market_data?.price_change_24h,
      center: "true",
    },
    {
      name: "24h Market Cap Change (USD)",
      selector: (row) =>
        `${row?.market_data?.market_cap_change_24h_in_currency?.usd}$`,
      center: "true",
    },
  ];
  return (
    <div id="graph" className="m-4 px-4">
      <div className="rounded-xl bg-white">
        <DataTable
          subHeaderAlign="center"
          sortServer
          sortIcon
          columns={columns}
          data={row}
          pagination
          paginationRowsPerPageOptions={[10, 15, 20, 50]}
          highlightOnHover
          pointerOnHover
          responsive
        />
      </div>
    </div>
  );
};

export default Index;
