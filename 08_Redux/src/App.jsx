import Counter from "./features/counter/Counter";
import Users from "./features/users/Users";
import ProductList from "./components/ProductList";
import Cart from "./features/cart/Cart";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <Navbar />
    
      <h1>Redux Complete Application</h1>
    <Routes>
        <Route path="/Counter" element={<Counter />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/Cart" element={< Cart />}/>
      </Routes>
    

    </>
  );
}

export default App;
