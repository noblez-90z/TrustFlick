import "./App.css";
import HomePage from "./component/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import { Container } from "@mui/material";

function App() {
  return (
    <Router>
      <div className="app">
        <Container
          maxWidth="100%"
          disableGutters
          sx={{ overflowX: "hidden", px: { md: "none" } }}
        >
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/Login" element={<Login />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
