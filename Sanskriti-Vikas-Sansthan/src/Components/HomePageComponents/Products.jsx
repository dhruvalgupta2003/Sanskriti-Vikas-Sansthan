import { useEffect, useState } from "react";
import axios from "axios";
import yoga from "../../assets/yoga.png";
import { NavLink } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/products");
        setProducts(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(true);
      }
    };
    fetchProducts();
  }, []);

  const svg4 = (
    <svg
      width="305"
      height="3"
      viewBox="0 0 305 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="305" height="3" fill="#0E1B1B" />
    </svg>
  );

  const divStyle = {
    height: "30vh",
    width: "30vw",
  };

  return (
    <div className="container mx-auto p-[40px]">
      <div
        className="wardrobes"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "0 2rem",
        }}
      >
        <h1 style={{ textAlign: "right" }}> Our Products</h1>
        {svg4}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center relative"
          >
            <NavLink to={`/product/${product._id}`}>
              <img
                src={product.img || yoga}
                alt={product.title || "Product"}
                className="product object-contain mb-4 "
                style={divStyle}
              />
              <SearchOutlinedIcon style={{ color: "black" }} />
            </NavLink>
            <h3 className="text-lg font-medium text-center">
              {" "}
              {product.title || "Product Title"}{" "}
            </h3>
            <p className="text-gray-600 text-center mb-10">
              {" "}
              Rs. {product.price || "Price"}{" "}
            </p>
            <NavLink to={`/product/${product._id}`}>
              <button className="bg-brown text-white rounded-full px-4 py-2 absolute bottom-4 left-1/2 transform -translate-x-1/2">
                {" "}
                Buy Now{" "}
              </button>
            </NavLink>
          </div>
        ))}
      </div>
      <button className="bg-green-500 text-white rounded-full px-6 py-3 mt-8 mx-auto block hover:bg-green-600 focus:outline-none">
        {" "}
        View More{" "}
      </button>
    </div>
  );
};

export default Products;
