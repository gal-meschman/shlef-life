import moment from "moment";

const products = [
  {
    key: 1,
    name: "Ready",
    category: "Example",
    date: moment().add(5, "d").format("l"),
  },
  {
    key: 2,
    name: "Safe",
    category: "Example",
    date: moment().add(9, "d").format("l"),
  },
  { key: 3, name: "Expired", category: "Example", date: moment().format("l") },
];

const compare = (a, b) =>
  Date.parse(moment(new Date(a.date))) >= Date.parse(moment(new Date(b.date)))
    ? 1
    : -1;

products.sort(compare);

const handlePosition = (prevState, action) => {
  if ( prevState.length === 0 ||
    Date.parse(prevState[prevState.length - 1].date) <=
    Date.parse(action.payload.date)
  )
    prevState.splice(prevState.length, 0, action.payload);
  else {
    for (let i = 0; i < prevState.length; i++)
      if (Date.parse(prevState[i].date) >= Date.parse(action.payload.date)) {
        prevState.splice(i, 0, action.payload);
        break;
      }
  }
  return prevState;
};

const filterKey = (product, key) => product.key !== key;

export { handlePosition, filterKey, products };
