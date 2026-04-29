import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookAppointment from "./pages/BookAppointment";
import Confirmation from "./pages/Confirmation";
import "./styles/app.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<BookAppointment />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;