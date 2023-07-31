import { useEffect, useState } from "react";
import instance from "../utils/AxiosInstance";

function useCrypto() {
  const [coinDetail, setCoinDetail] = useState({});
  const [coinPrice, setCoinPrice] = useState([]);

  // coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en
  //
  const fetchCoinDetail = async () => {
    try {
      const response = await instance.get(
        `coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&sparkline=false`
      );
      console.log(response.data)
      setCoinDetail({...response.data});
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCoinDetail();
  }, []);

  return { coinDetail };
}

export default useCrypto;
