import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Fight from "./pages/Fight";
import HomePage from "./pages/HomePage";
import Identify from "./pages/Identify";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/identify" element={<Identify />} />
          <Route path="/fight" element={<Fight />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
