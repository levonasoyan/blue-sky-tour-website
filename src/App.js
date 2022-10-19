import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs.js";
import ContactUs from "./pages/ContactUs";
import HotTours from "./pages/HotTours";
import Tours from "./pages/Tours";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TourSingle from "../src/pages/TourSingle";
import Outgoing from "./pages/Outgoing";
import Incoming from "./pages/Incoming";
import MostWanted from "./pages/MostWanted";

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />

          <Route element={<Tours />} path="/tours" />
          <Route element={<HotTours />} path="/dailytours" />
          <Route element={<AboutUs />} path="/aboutus" />
          <Route element={<ContactUs />} path="/contactus" />
          <Route element={<TourSingle />} path="/tour" />
          <Route element={<Outgoing />} path="/outgoing" />
          <Route element={<Incoming />} path="/incoming" />
          <Route element={<MostWanted />} path="/mostwanted" />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
