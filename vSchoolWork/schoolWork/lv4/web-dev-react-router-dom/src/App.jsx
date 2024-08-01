import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import InventoryPage from "./components/InventoryPage";
import { Routes, Route } from "react-router-dom";
import InventoryDetails from "./components/InventoryDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory/" element={<InventoryPage />} />
        <Route path="/inventory/:id" element={<InventoryDetails />} />
      </Routes>
    </>
  );
}

export default App;
