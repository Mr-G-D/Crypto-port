import axios from "axios";

export const fetchCurrency = async () => {
  const response = await axios.get("https://api.coingecko.com/api/v3/coins");
  if (response) {
    // success
    const json = response.data;
    return json;
  } else {
    console.log("empty");
  }
};

export const fetchHistory = async (id) => {
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=29&interval=daily`,
  );
  if (response) {
    // success
    const json = response.data;
    return json;
  } else {
    console.log("empty");
  }
};

export const fetchData = async (id) => {
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/coins/${id}`,
  );
  if (response) {
    // success
    const json = response.data;
    return json;
  } else {
    console.log("empty");
  }
};
