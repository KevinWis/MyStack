import Routes from "./routes";
import Header from "./components/shared/header";
import Footer from "./components/shared/footer";

import MemberCardhover from "./components/members/memberCardhover";

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <MemberCardhover />

        <Footer />
      </main>
    </div>
  );
}
export default App;
