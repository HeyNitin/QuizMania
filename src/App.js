import "./styles/styles.css";
import Header from "./components/Header";
import { Toast } from "./components/Toast";
import Routes from "./components/Routes.js";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Toast />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
