import { Routes, Route } from "react-router-dom";
import About from "./about";
import Services from "./services";
import Footer from "./footer";
import Main from "./main";
import MainLayout from "./mainlayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/main" element={<Main />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/footer" element={<Footer />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
