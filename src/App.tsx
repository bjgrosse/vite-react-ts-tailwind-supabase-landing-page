import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Home page without navbar */}
        <Route path="/" element={<Layout showNavbar={false} />}>
          <Route index element={<Home />} />
        </Route>

        {/* Other pages with navbar */}
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<About />} />
          {/* Add more routes here */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
