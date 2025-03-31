import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Hearder/Header";
import Home from "./pages/Home";
import ContactForm from "./pages/ContactForm";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
      <ScrollToTop /> 
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactForm" element={<ContactForm />} />
      </Routes>
      <Footer/>
    </Router>
     
    </div>
  );
}

export default App;
