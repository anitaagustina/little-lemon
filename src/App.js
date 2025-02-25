import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Reservations from "./components/Reservations";
import Footer from "./components/Footer";
import ConfirmedBooking from "./components/ConfirmedBooking";

function App() {
  return (
    <>
    <Header/>
    <Router>
    <Navigation/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/confirmation" element={<ConfirmedBooking />} />
      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
