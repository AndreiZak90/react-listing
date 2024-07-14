import "./App.css";
import Listing from "./components/Listing";
import etsy from "./data/etsy.json";
const newData = etsy.filter((item) => item.state === "active");

function App() {
  return (
    <>
      <Listing items={newData} />
    </>
  );
}

export default App;
