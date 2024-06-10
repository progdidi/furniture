import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MainPage from "./pages/MainPage/MainPage";
import ProductPage from "./pages/ProductPage/ProductPage";


function App() {

  return (
    <div className="App">
      <Header/>

        <main className="main">
          {/* <MainPage/> */}
          <ProductPage/>
        </main>

      <Footer/>
    </div>
  );
}

export default App;
