import Nav from "./componence/nav/Nav";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Products from "./pages/products/Products";
import Details from "./componence/details/Details";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="products" element={<Products />}></Route>
          <Route path="details/:id" element={<Details/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
