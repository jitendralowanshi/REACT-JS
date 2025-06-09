import Items from "./Items";

const FoodItems = ({ items }) => {
  //   let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk"];
  return (
    <>
      {/* Map method  */}
      <ul className="list-group">
        {items.map((item) => (
          <Items key={item} jk={item}></Items>
        ))}

        {/* <li className="list-group-item">Dal</li>
        <li className="list-group-item">Green Vegetable</li>
        <li className="list-group-item">Roti</li>
        <li className="list-group-item">Salad</li>
        <li className="list-group-item">Milk</li> */}
      </ul>
    </>
  );
};

export default FoodItems;
