import RegisterSecondary from "./pages/registerSecondary";
import Header from "./components/shared/header";
import Footer from "./components/shared/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <RegisterSecondary />
      </main>
      <Footer />
    </div>
  );
}
export default App;
