import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MainPage from "./pages/MainPage/MainPage";


function App() {

  return (
    <div className="App">
      <Header/>

        <main className="main">
          <MainPage/>
        </main>

      <Footer/>
    </div>
  );
}

export default App;
