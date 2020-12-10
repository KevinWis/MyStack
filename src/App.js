import Header from './components/shared/header'
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <Routes/>
      <main>
        <Header></Header>
      </main>
    </div>
  );
}
export default App;
