import moment from "moment";

const products = [
  { name: "Bread", category: "Grain", date: "7/18/2020" },
  { name: "Hummus", category: "Legumes/beans", date: "4/30/2020" },
  { name: "Apple", category: "Fruits", date: moment().format("l") },
];

const compare = (a, b) =>
  Date.parse(moment(a.date)) >= Date.parse(moment(b.date)) ? 1 : -1;

products.sort(compare);

const handlePosition = (prevState, action) => {
  if (
    Date.parse(prevState[prevState.length - 1].date) <=
    Date.parse(action.payload.date)
  )
    prevState.splice(prevState.length, 0, action.payload);
  else {
    prevState.some((product, index) => {
      if (Date.parse(product.date) >= Date.parse(action.payload.date))
        return prevState.splice(index, 0, action.payload);
    });
  }
  return prevState;
};

export { handlePosition, products };
