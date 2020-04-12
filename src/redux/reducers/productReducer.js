const product = {
    name: "",
    category: "Categories",
    date: "",
  }

export default (state = product, action) => {
  switch (action.type) {
    case "ADDDATA":
          return {...state , ...action.payload};
    case "EMPTYDATA":
        return product;
    default:
      return state;
  }
};

