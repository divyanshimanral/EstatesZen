import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
import Property from "./pages/Property/Property";
import PropertyDetail from "./pages/Property/PropertyDetail/PropertyDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/properties" element={<Property />} />
          <Route path="/properties/:id" element={<PropertyDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
