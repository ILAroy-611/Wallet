import { useEffect, useState } from "react";
import instance from "../utils/AxiosInstance";

function useCrypto() {
    const [response,setResponse] = useState([])
  const fetchAllCryptoCoins = async () => {
    const response = await instance.get(`/coins/list`);
    // console.log(response.data);
    setResponse(response.data)
  };

  useEffect(() => {
    fetchAllCryptoCoins();
  }, []); 

  return {response}
}



export default useCrypto;
