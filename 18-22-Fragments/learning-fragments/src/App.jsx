import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import Container from "./components/Container";

function App() {
  // let foodItems = [];
  let foodItems = ["Banana", "Green Vegetable", "Roti", "Salad", "Milk"];

  return (
    <>
      <Container>
        {/* 21 passing data via props */}
        <h1 className="heading">Healthy Food</h1>
        <ErrorMsg items={foodItems}></ErrorMsg>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
      <Container>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis nam,
          placeat explicabo voluptatum corporis recusandae voluptatibus
          voluptatem vero. Omnis corrupti similique ipsa dignissimos natus
          voluptatum quos quidem ducimus harum aperiam?
        </p>
      </Container>
    </>
  );
}

export default App;
