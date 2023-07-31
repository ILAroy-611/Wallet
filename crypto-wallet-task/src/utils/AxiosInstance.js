
import axios from 'axios'

// "Access-Control-Allow-Origin": "http://localhost:3000","http://localhost:3000"
const instance= axios.create({
    baseURL:`https://api.coingecko.com/api/v3/`,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        }
});

export default instance;