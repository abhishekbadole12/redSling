import Header from "./components/common/Header/Header";
import Dashboard from "./pages/Dashboard/Dashboard";
import Styles from "./App.module.css";

function App() {
  return (
    <div className={Styles.App}>
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
