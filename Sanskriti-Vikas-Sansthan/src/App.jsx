import Home from "./Pages/Home";
import Yoga from "./Pages/Yoga";
import Aboutus from "./Pages/AboutUs";
import ProductList from "./Pages/ProductList";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import VillageIndustris from './Pages/Vilage'
import ProductsPage from "./Pages/ProductsPage";
import Product from './Pages/Product';
import Cancel from "./Pages/Cancel";
import Orders from './Pages/Orders';
import Cart from "./Pages/Cart";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Success from "./Pages/Success";
// import Orders from "./Pages/Orders";
function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/yoga" element={<Yoga />}></Route>
        <Route path="/aboutus" element={<Aboutus />}></Route>
        <Route path="/village" element={<VillageIndustris />}></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/products/:category" element={<ProductList />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/success" element={<Success />} />
        <Route path="/orders/find/:id" element={<Orders/>} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/orders/success" element={<Success />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
      </Routes>
    </Router>
  );
}

export default App;