import "./App.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Backers from "./components/Backers";
import Game from "./components/Game";
import Characters from "./components/Characters";
function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <Backers />
        <Game />
        <Characters />
      </main>
    </div>
  );
}

export default App;
