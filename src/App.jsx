import Home from "Pages/Home/Home";
import About from "Pages/About/About";
import Plans from "Pages/Plans/Plans";
import Locations from "Pages/Locations/Locations";
import Footer from "Pages/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Home />
      <About />
      <Plans />
      <Locations />
      {/*Customers */}
      <Footer />
    </div>
  );
}

export default App;
