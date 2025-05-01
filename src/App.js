import "./App.css";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import SecondHero from "./components/SecondHero";
import Form from "./components/Form";
import Sidebar from "./components/Sidebar";
import Ankit from "./components/Ankit";

function App() {
  return (
    <>
      <div className="app-container">
        
        <Sidebar></Sidebar>
       
        <div className="content">
          <Navbar></Navbar>
          <Herosection></Herosection>
          <SecondHero></SecondHero>
          <Form></Form>
          <Ankit></Ankit>
        </div>

      </div>
    </>
  );
}

export default App;
