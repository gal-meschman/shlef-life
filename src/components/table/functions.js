import axios from "axios";
import moment from "moment";

const transport = axios.create({ withCredentials: true });

const getProudcts = async () => {
  try {
    return await transport.get("http://localhost:2000/getProducts");
  } catch (err) {}
};

const checkDate = (product) =>
  Date.parse(moment(new Date(product.date))) >=
  Date.parse(moment().add(1, "week").format())
    ? "white"
    : Date.parse(moment(new Date(product.date))) >=
      Date.parse(moment().add(3, "days").format())
    ? "#ffcc00"
    : "red";

export { getProudcts, checkDate };
