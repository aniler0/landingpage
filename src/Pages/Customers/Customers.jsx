import Slider from "Components/Slider/Slider";
import "./customers.css";
const Customers = () => {
  return (
    <div className="customers">
      <div className="customers__Container">
        <div className="text__Area">
          <h1>Trusted by Thousands of Happy Customer</h1>
          <p>
            These are the stories of our customers who have joined us with great
            pleasure when using this crazy feature.
          </p>
        </div>
        <Slider />
      </div>
    </div>
  );
};

export default Customers;
