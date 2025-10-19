import Footer from "./components/organisms/Footer";
import Header from "./components/organisms/Header";
import Menu from "./components/organisms/Menu";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Menu />
      </main>
      <Footer />
    </>
  );
}

export default App;
