const ErrorMsg = ({ items }) => {
  //   let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk"];

  return <>{items.length === 0 ? <h3>i am still hungry.</h3> : null}</>;
};

export default ErrorMsg;
