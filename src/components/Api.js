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
