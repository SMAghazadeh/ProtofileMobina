import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Login from "./components/Login";
import MessageTable from "./components/AdminPanel";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="relative z-0 bg-primary">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Navbar />
              <Hero />
            </div>
            <About />
            <Experience/>
            <Works />
            <Feedbacks />
            <div className="relative z-0">
              <Contact />
            </div>
          </div>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/Admin" element={<MessageTable />} />

      </Routes>
    </BrowserRouter>
  );
}
