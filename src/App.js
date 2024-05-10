import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { ResumePage } from "./pages/ResumePage";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/resume" element={<ResumePage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
