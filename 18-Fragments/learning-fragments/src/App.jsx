import "./App.css";

function App() {
  // let foodItems = [];
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk"];
  // if (foodItems.length === 0) {
  //   return <h3>i am still hungry</h3>;
  let emptyMsg = foodItems.length === 0 ? <h3>i am still hungry.</h3> : null;
  // }

  return (
    <>
      <h1>Healthy Food</h1>

      {/* use turnery operator- 20 conditional rendering  */}
      {/* {foodItems.length === 0 ? <h3>i am still hungry</h3> : null} */}
      {/* {foodItems.length === 0 && <h3>I Am still hungry</h3>} */}
      {emptyMsg}

      {/* Map method  */}
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}

        {/* <li className="list-group-item">Dal</li>
        <li className="list-group-item">Green Vegetable</li>
        <li className="list-group-item">Roti</li>
        <li className="list-group-item">Salad</li>
        <li className="list-group-item">Milk</li> */}
      </ul>
    </>
  );
}

export default App;
