import "./App.css";
import HomePage from "./component/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./component/Login";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/Login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
