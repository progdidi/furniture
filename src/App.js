import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MainPage from "./pages/MainPage/MainPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import ShopPage from "./pages/shopPage/ShopPage";
import BlogPage from "./pages/blogPage/BlogPage";

function App() {
  return (
    <div className="App">
      <Header />

      <main className="main">
        {/* <MainPage/> */}
        {/* <ProductPage/> */}
        <ShopPage />
        {/* <BlogPage/> */}
      </main>

      <Footer />
    </div>
  );
}

export default App;
