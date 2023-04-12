import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header.js";
import ReserveTable from "./components/ReserveTable";

function App() {
  return (
    <main id="main-container">
      <Header />
      <ReserveTable />
      <Footer />
    </main>
  );
}

export default App;
