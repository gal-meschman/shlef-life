import axios from "axios";

const transport = axios.create({ withCredentials: true });

const getProudcts = async () => {
  try {
    return await transport.get("http://localhost:2000/getProducts");
  } catch (err) {}
};


export { getProudcts };
