import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppContext from "./config/AppContext";
import Apropos from "./pages/Apropos";
import ContactUs from "./pages/contactPage/ContactUs";
import Header from "./components/header/Header";
import Home from "./pages/homePage/Home";
import Service from "./pages/Services";

function App() {
  const [dataInput, setDataInput] = React.useState(null);
  return (
    <BrowserRouter>
      <AppContext.Provider value={{ dataInput, setDataInput }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactez-nous" element={<ContactUs />} />
          <Route path="/services" element={<Service />} />
          <Route path="/a-propos" element={<Apropos />} />
        </Routes>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
