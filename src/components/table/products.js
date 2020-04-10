import moment from "moment";

export const products = [
    { name: "Bread", category: "Grain", date: "4/18/2020" },
    { name: "Hummus", category: "Legumes/beans", date: "4/17/2020" },
    { name: "Apple", category: "Fruits", date: moment().format("l") },
  ];