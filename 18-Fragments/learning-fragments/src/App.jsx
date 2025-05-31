import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";

function App() {
  // let foodItems = [];
  let foodItems = ["banana", "Green Vegetable", "Roti", "Salad", "Milk"];

  return (
    <>
      {/* 21 passing data via props */}
      <h1>Healthy Food</h1>
      <ErrorMsg items={foodItems}></ErrorMsg>
      <FoodItems items={foodItems}></FoodItems>
    </>
  );
}

export default App;
