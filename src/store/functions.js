import moment from "moment";

const products = [
  { name: "Ready", category: "Example", date: moment().add(5,'d').format("l") },
  { name: "Safe", category: "Example", date: moment().add(9,'d').format("l") },
  { name: "Expired", category: "Example", date: moment().format("l") },
];

const compare = (a, b) =>
  Date.parse(moment(new Date(a.date))) >= Date.parse(moment(new Date(b.date))) ? 1 : -1;

products.sort(compare);

const handlePosition = (prevState, action) => {
  if (
    Date.parse(prevState[prevState.length - 1].date) <=
    Date.parse(action.payload.date)
  )
    prevState.splice(prevState.length, 0, action.payload);
  else {
    for(let i = 0; i < prevState.length; i++)
      if (Date.parse(prevState[i].date) >= Date.parse(action.payload.date))
         {
           prevState.splice(i, 0, action.payload);
           break;
        }
    };
  return prevState;
};

export { handlePosition, products };
