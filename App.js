import "./App.css";
import { Router, Route } from "react-router-dom";
import Profile from "./profile";
import Services from "./services";
import Header from "./header";
import Footer from "./footer";
import Main from "./main";

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Route path="/main" element={<Main />} />
        <Route path="/services" element={<Services />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/footer" element={<Footer />} />
      </Router>
    </>
  );
}

export default App;
