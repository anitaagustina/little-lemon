import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Header/>
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
