import Products from "../Components/HomePageComponents/OurProduct/Component7";
import DrawerAppBar from "../Components/Navbar/Navbar";
import Footer from "../Components/HomePageComponents/footer/Footer";
const ProductsPage = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Products />
      <DrawerAppBar />
      <Footer />
    </div>
  );
};

export default ProductsPage;
