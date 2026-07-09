import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Country from "./Country";
import About from "./About";
import "./App.css";

import belgiumPath from "./entries/belgium.md";
import czechRepublicPath from "./entries/czech_republic.md";
import denmarkPath from "./entries/denmark.md";
import francePath from "./entries/france.md";
import germanyPath from "./entries/germany.md";
import netherlandsPath from "./entries/netherlands.md";
import norwayPath from "./entries/norway.md";
import spainPath from "./entries/spain.md";
import swedenPath from "./entries/sweden.md";
import switzerlandPath from "./entries/switzerland.md";
import unitedKingdomPath from "./entries/united_kingdom.md";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <div>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/belgium" element={<Country mdPath={belgiumPath} />} />
            <Route path="/czech_republic" element={<Country mdPath={czechRepublicPath} />} />
            <Route path="/denmark" element={<Country mdPath={denmarkPath} />} />
            <Route path="/france" element={<Country mdPath={francePath} />} />
            <Route path="/germany" element={<Country mdPath={germanyPath} />} />
            <Route path="/netherlands" element={<Country mdPath={netherlandsPath} />} />
            <Route path="/norway" element={<Country mdPath={norwayPath} />} />
            <Route path="/spain" element={<Country mdPath={spainPath} />} />
            <Route path="/sweden" element={<Country mdPath={swedenPath} />} />
            <Route path="/switzerland" element={<Country mdPath={switzerlandPath} />} />
            <Route path="/svalbard_and_jan_mayen" element={<Country mdPath={norwayPath} />} />
            <Route path="/united_kingdom" element={<Country mdPath={unitedKingdomPath} />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
