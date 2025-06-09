function MapMethod19() {
  let foodItems1 = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk"];
  // if (foodItems.length === 0) {
  //   return <h3>i am still hungry</h3>;
  // this is conditional rendering 20
  // }

  return (
    <>
      {/* this is map method syntax */}
      {/* <h1> Healthy Food </h1>
      <ul className="list-group">
        {foodItems1.map((items) => (
          <li key={item} className="list-group-item">
            Dal
          </li>
        ))}
      </ul> */}

      <h1>Healthy Food</h1>

      {/* use turnery operator- 20 conditional rendering - if else, turnery operator, conditional operator use kr sakte haiu  */}
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
export default MapMethod19;
