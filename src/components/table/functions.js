import moment from "moment";

export default (product) =>
  Date.parse(moment(new Date(product.date))) >=
  Date.parse(moment().add(1, "week").format())
    ? "white"
    : Date.parse(moment(new Date(product.date))) >=
      Date.parse(moment().add(3, "days").format())
    ? "#ffcc00"
    : "red";

