import "./styles/styles.css";
import Header from "./components/Header";
import Routes from "./components/Routes.js";
import Footer from "./components/Footer";
function App() {
  console.log(Routes);
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
