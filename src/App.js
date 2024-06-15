import {HashRouter as Router, Routes, Route} from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MainPage from "./pages/MainPage/MainPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import ShopPage from "./pages/shopPage/ShopPage";
import BlogPage from "./pages/blogPage/BlogPage";
import ContactsPage from "./pages/contactsPage/ContactsPage";
import CartPage from "./pages/cartPage/CartPage";
import ArticlePage from "./pages/ArticlePage/ArticlePage";

function App() {
  return (
    <Router>
    <div className="App">
      <Header />

      <main className="main">
        <Routes>
           <Route path="/" element={<MainPage/>} />
           <Route path="/product" element={<ProductPage/>} />
           <Route path="/shop" element={<ShopPage/>} />
           <Route path="/blog" element={<BlogPage/>} />
           <Route path="/contacts" element={<ContactsPage/>} />
           <Route path="/cart" element={<CartPage/>} />
           <Route path="/article" element={<ArticlePage/>} />
        </Routes>
      </main>

      <Footer />
    </div>
    </Router>
  );
}

export default App;
