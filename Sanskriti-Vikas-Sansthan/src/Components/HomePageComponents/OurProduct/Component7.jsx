import { useEffect, useState } from "react";
import axios from "axios";
import bannerImage1 from "../../../assets/yogabg.png";
import Skeleton from "react-loading-skeleton";
import yoga from "../../../assets/yoga.png";
import { NavLink } from "react-router-dom";

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

  return (
    <div className="component-5-wrapper mx-auto">
      <div className="component-5-container">
        <img src={bannerImage1} />
        <p>
          Our Products
          <br />
        </p>
      </div>
      <div
        className="wardrobes"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "0 2rem",
        }}
      >
        <h1 style={{ textAlign: "right" }}>Our Products</h1>
        {svg4}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
        {loading ? (
          // Display skeleton loading view if loading is true
          Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="skeleton-wrapper">
              <Skeleton width={"100%"} height={"200px"} />
            </div>
          ))
        ) : (
          // Display products after data is fetched
          products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center relative"
            >
              <img
                src={product.img || yoga}
                alt={product.title || "Product"}
                className="product object-contain mb-4 w-full h-auto"
              />
              <h3 className="text-lg font-medium text-center">
                {product.title || "Product Title"}
              </h3>
              <p className="text-gray-600 text-center mb-10">
                Rs. {product.price || "Price"}
              </p>
              <NavLink to={`/product/${product._id}`}>
                <button className="bg-brown text-white rounded-full px-4 py-2 absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  Buy Now
                </button>
              </NavLink>
            </div>
          ))
        )}
      </div>
      <button className="bg-green-500 text-white rounded-full px-6 py-3 mt-8 mx-auto block hover:bg-green-600 focus:outline-none">
        View More
      </button>
    </div>
  );
};

export default Products;