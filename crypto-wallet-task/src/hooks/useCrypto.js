import { useEffect, useState } from "react";
import instance from "../utils/AxiosInstance";

function useCrypto(coinName) {
  const [coinDetail, setCoinDetail] = useState([]);
  const [frequency,setFrequency] =  useState(1);

  // coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en
  //
  const fetchCoinDetail = async (coinName) => {
    try {
      const response = await Promise.allSettled([
        instance.get(
          `coins/${coinName}?localization=false&tickers=false&market_data=true&community_data=false&sparkline=false`
        ),
        instance.get(
          `coins/${coinName}/market_chart?vs_currency=usd&days=${frequency}&precision=2`
        ),
      ]);
      const data =  response.map(res=>res.value.data)
      setCoinDetail([...data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCoinDetail(coinName);
  }, [frequency]);

  return { coinDetail, frequency,setFrequency };
}

export default useCrypto;
